import { render } from '@redwoodjs/testing/web'

import StewardLayout from './StewardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StewardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StewardLayout />)
    }).not.toThrow()
  })
})
