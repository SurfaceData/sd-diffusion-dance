// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SidebarItem> = (args) => {
//   return <SidebarItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SidebarItem from './SidebarItem'

export const generated = () => {
  return <SidebarItem />
}

export default {
  title: 'Components/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>
