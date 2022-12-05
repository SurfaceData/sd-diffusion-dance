import { render } from '@redwoodjs/testing/web'

import PromptAnalysis from './PromptAnalysis'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PromptAnalysis', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PromptAnalysis />)
    }).not.toThrow()
  })
})
