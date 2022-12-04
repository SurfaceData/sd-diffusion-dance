import { render } from '@redwoodjs/testing/web'

import StewardReviewPage from './StewardReviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StewardReviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StewardReviewPage />)
    }).not.toThrow()
  })
})
