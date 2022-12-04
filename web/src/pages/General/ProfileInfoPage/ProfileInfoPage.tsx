import { Flex, Heading } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Details, LabeledInput } from '@surfacedata/sd-components'

const ProfileInfoPage = () => {
  const { currentUser } = useAuth()
  const roleLabels = {
    admin: 'Admin',
    steward: 'Steward',
    general: 'General',
  }
  const role = currentUser?.roles ? currentUser.roles[0] : 'general'
  return (
    <>
      <MetaTags title="ProfileInfo" description="Profile Info" />

      <Flex spacing="12px" direction="column" gap="4">
        <Heading>Profile</Heading>

        <Details title="How this helps">
          Contact information helps us stay in communication
        </Details>

        <LabeledInput label="Email" readOnly value={currentUser?.email || ''} />
        <LabeledInput label="Role" readOnly value={roleLabels[role]} />
      </Flex>
    </>
  )
}

export default ProfileInfoPage
