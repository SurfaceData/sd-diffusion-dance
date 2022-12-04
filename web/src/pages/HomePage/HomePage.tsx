import { useLazyQuery } from '@apollo/client'
import { Image, Flex, Spinner, Switch } from '@chakra-ui/react'
import {
  Button,
  LabeledInput,
  LabeledSelect,
  LabeledSlider,
} from '@surfacedata/sd-components'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useRef, useState } from 'react'

const QUERY = gql`
  query StableDiffusion($input: GenerateImageInput!) {
    generateImage(input: $input) {
      id
      content
    }
  }
`

const HomePage = () => {
  const [generateImage, { loading, error, data }] = useLazyQuery(QUERY, {
    fetchPolicy: 'no-cache',
  })

  const { isAuthenticated, currentUser, hasRole } = useAuth()
  const promptEl = useRef(null)
  const negPromptEl = useRef(null)
  const samplerEl = useRef(null)
  const seedEl = useRef(null)
  const [gradience, setGradience] = useState(5.0)
  const [steps, setSteps] = useState(50)
  const [batchSize, setBatchSize] = useState(4)
  const [useRandom, setUseRandom] = useState(true)

  const onClick = () => {
    generateImage({
      variables: {
        input: {
          prompt: promptEl.current.value,
          negative_prompt: negPromptEl.current.value,
          sampler: samplerEl.current.value,
          guidance_scale: gradience,
          steps,
          batch_size: batchSize,
          seed: useRandom ? '-1' : seedEl.current.value,
        },
      },
    })
  }
  return (
    <>
      {!isAuthenticated ? (
        <div>Register</div>
      ) : (
        <div>
          <Flex spacing="12px" direction="column" gap="4">
            <LabeledInput name="prompt" label="Prompt" ref={promptEl} />
            <LabeledInput
              name="negative_prompt"
              label="Negative Prompt"
              ref={negPromptEl}
            />

            <LabeledSelect ref={samplerEl} name="sampler" label="Sampler">
              <option value="ddim">DDIM</option>
              <option value="dpm">DPM</option>
              <option value="euler">Euler</option>
              <option value="euler_a">Euler Ancestral</option>
              <option value="pndm">PNDM</option>
              <option value="lms">LMS</option>
            </LabeledSelect>

            <LabeledSlider
              onChange={setGradience}
              defaultValue={5.0}
              label="Sampler Gradience"
              min={-20}
              max={100.0}
              marks={[
                { value: 5, label: '5' },
                { value: 20, label: '20' },
                { value: 40, label: '40' },
                { value: 80, label: '80' },
              ]}
            />

            <LabeledSlider
              onChange={setSteps}
              defaultValue={50}
              label="Sampler Steps"
              min={15}
              max={250}
              marks={[
                { value: 20, label: '20' },
                { value: 50, label: '50' },
                { value: 100, label: '100' },
                { value: 200, label: '200' },
              ]}
            />

            <LabeledSlider
              onChange={setBatchSize}
              defaultValue={4}
              label="Batch Size"
              min={1}
              max={16}
              marks={[
                { value: 4, label: '4' },
                { value: 8, label: '8' },
                { value: 12, label: '12' },
              ]}
            />

            <Switch
              defaultValue={useRandom}
              onChange={(event) => {
                setUseRandom(!useRandom)
              }}
            />
            {!useRandom && (
              <LabeledInput
                name="seed"
                label="Seed"
                ref={seedEl}
                type="number"
              />
            )}

            <Flex direction="row" justify="space-between">
              <Button size="sm" onClick={onClick}>
                cats
              </Button>

              {loading && <Spinner />}
            </Flex>
          </Flex>

          {data &&
            data.generateImage.map(({ id, content }) => (
              <Image key={id} src={content} />
            ))}
        </div>
      )}
    </>
  )
}

export default HomePage
