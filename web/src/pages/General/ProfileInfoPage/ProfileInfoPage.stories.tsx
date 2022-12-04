import type { ComponentMeta } from '@storybook/react'

import ProfileInfoPage from './ProfileInfoPage'

export const generated = () => {
  return <ProfileInfoPage />
}

export default {
  title: 'Pages/ProfileInfoPage',
  component: ProfileInfoPage,
} as ComponentMeta<typeof ProfileInfoPage>
