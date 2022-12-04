import { Heading } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import { Details } from '@surfacedata/sd-components'

import UsersCell from 'src/components/UsersCell'

const AdminManageUsersPage = () => {
  return (
    <>
      <MetaTags title="AdminManageUsers" description="Manage Users" />

      <Heading>Manage Users</Heading>

      <Details title="How to manage users">
        Managing users means setting their permissions. Choose the right level
        of access for each user.
      </Details>

      <div>
        <UsersCell />
      </div>
    </>
  )
}

export default AdminManageUsersPage
