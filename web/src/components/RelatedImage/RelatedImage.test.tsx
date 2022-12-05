import { render } from '@redwoodjs/testing/web'

import RelatedImage from './RelatedImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RelatedImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RelatedImage />)
    }).not.toThrow()
  })
})
