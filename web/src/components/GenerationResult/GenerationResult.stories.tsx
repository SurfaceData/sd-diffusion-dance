// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GenerationResult> = (args) => {
//   return <GenerationResult {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GenerationResult from './GenerationResult'

export const generated = () => {
  return <GenerationResult />
}

export default {
  title: 'Components/GenerationResult',
  component: GenerationResult,
} as ComponentMeta<typeof GenerationResult>
