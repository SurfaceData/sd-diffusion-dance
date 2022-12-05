export const schema = gql`
  type NeighborResult {
    url: String
    caption: String
    similarity: Float
  }

  type GenerationResult {
    id: String!
    content: String!
    neighbor: [NeighborResult]
  }

  type PromptAnalysis {
    neighbor: [NeighborResult]
  }

  type DiffusionResult {
    generation: [GenerationResult]
    promptAnalysis: PromptAnalysis!
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
    generateImage(input: GenerateImageInput!): DiffusionResult! @skipAuth
  }
`
