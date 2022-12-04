export const schema = gql`
  type UserOutput {
    id: String!
    email: String!
    role: String!
  }

  type UserRoleOutput {
    id: String!
    role: String!
  }

  type Query {
    users: [UserOutput]! @requireAuth(roles: "admin")
  }

  type Mutation {
    updateUserRole(id: String!, role: String!): UserRoleOutput!
      @requireAuth(roles: "admin")
  }
`
