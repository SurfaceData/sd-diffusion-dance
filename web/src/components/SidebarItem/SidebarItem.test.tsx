import { render } from '@redwoodjs/testing/web'

import SidebarItem from './SidebarItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarItem />)
    }).not.toThrow()
  })
})
