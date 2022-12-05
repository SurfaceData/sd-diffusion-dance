import { Prisma } from '@prisma/client'

import fetch from 'node-fetch'

import { db } from 'src/lib/db'

const randomInteger = () => {
  return Math.floor(Math.random() * 2 ** 32 - 1)
}

const IMAGE_PREFIX = 'data:image/png;base64,'

export const generateImage = async ({ input }) => {
  const { seed, ...restInput } = input
  const query = {
    seed: (seed === -1 ? randomInteger() : parseInt(seed)) || randomInteger(),
    ...restInput,
  }
  await db.diffusionQuery.create({
    data: {
      raw: query as Prisma.JsonObject,
    },
  })
  const knn_url = 'https://search.surfacedata.org/knn-service'
  const promptNeighbors = await fetch(knn_url, {
    method: 'POST',
    body: JSON.stringify({
      text: query.prompt,
      modality: 'text',
      num_images: 2,
      indice_name: 'laion_400m',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())

  const result = await fetch(process.env.SURFACE_DIFFUSION_URL, {
    method: 'POST',
    body: JSON.stringify({
      input: {
        apikey: process.env.SURFACE_DIFFUSION_KEY,
        ...query,
      },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
  const promptAnalysis = {
    neighbor: promptNeighbors.map(({ url, caption, similarity }) => ({
      url,
      caption,
      similarity,
    })),
  }
  const generation = await Promise.all(
    result.output.map(async (image, index) => {
      const imageNeighbors = await fetch(knn_url, {
        method: 'POST',
        body: JSON.stringify({
          image: image.slice(IMAGE_PREFIX.length),
          modality: 'image',
          num_images: 2,
          indice_name: 'laion_400m',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
      const neighbor = imageNeighbors.map(({ url, caption, similarity }) => ({
        url,
        caption,
        similarity,
      }))

      return {
        id: index,
        content: image,
        neighbor,
      }
    })
  )
  return {
    promptAnalysis,
    generation,
  }
}
