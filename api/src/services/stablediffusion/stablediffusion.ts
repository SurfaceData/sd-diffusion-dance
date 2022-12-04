import { Prisma } from '@prisma/client'

import fetch from 'node-fetch'

import { db } from 'src/lib/db'

const randomInteger = () => {
  return Math.floor(Math.random() * 2 ** 32 - 1)
}

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
  return result.output.map((image, index) => ({
    id: index,
    content: image,
  }))
}
