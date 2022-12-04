export const schema = gql`
  type DiffusionResult {
    id: String!
    content: String!
  }

  input GenerateImageInput {
    prompt: String!
    negative_prompt: String
    sampler: String
    guidance_scale: Float
    steps: Int
    batch_size: Int
    width: Int
    height: Int
    seed: String
  }

  type Query {
    generateImage(input: GenerateImageInput!): [DiffusionResult]! @skipAuth
  }
`
