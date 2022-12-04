import { render } from '@redwoodjs/testing/web'

import SurfaceFooter from './SurfaceFooter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SurfaceFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SurfaceFooter />)
    }).not.toThrow()
  })
})
