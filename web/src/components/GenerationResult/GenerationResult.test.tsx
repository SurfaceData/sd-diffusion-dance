import { render } from '@redwoodjs/testing/web'

import GenerationResult from './GenerationResult'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GenerationResult', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GenerationResult />)
    }).not.toThrow()
  })
})
