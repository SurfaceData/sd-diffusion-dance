// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PromptAnalysis> = (args) => {
//   return <PromptAnalysis {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PromptAnalysis from './PromptAnalysis'

export const generated = () => {
  return <PromptAnalysis />
}

export default {
  title: 'Components/PromptAnalysis',
  component: PromptAnalysis,
} as ComponentMeta<typeof PromptAnalysis>
