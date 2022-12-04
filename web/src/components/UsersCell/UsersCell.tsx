import type { UsersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import {
  TableContainer,
  Table,
  TableCaption,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

export const QUERY = gql`
  query UsersQuery {
    users {
      id
      email
      role
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }: CellSuccessProps<UsersQuery>) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Registered Users</TableCaption>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Update</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(({ id, email, role }) => (
            <Tr key={id}>
              <Td>{email}</Td>
              <Td>{role}</Td>
              <Td>Edit</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
