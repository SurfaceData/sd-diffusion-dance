// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RelatedImage> = (args) => {
//   return <RelatedImage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RelatedImage from './RelatedImage'

export const generated = () => {
  return <RelatedImage />
}

export default {
  title: 'Components/RelatedImage',
  component: RelatedImage,
} as ComponentMeta<typeof RelatedImage>
