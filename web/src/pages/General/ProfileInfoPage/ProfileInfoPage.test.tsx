import { render } from '@redwoodjs/testing/web'

import ProfileInfoPage from './ProfileInfoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfileInfoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileInfoPage />)
    }).not.toThrow()
  })
})
