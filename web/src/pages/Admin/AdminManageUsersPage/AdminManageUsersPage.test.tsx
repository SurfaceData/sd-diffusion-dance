import { render } from '@redwoodjs/testing/web'

import AdminManageUsersPage from './AdminManageUsersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminManageUsersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminManageUsersPage />)
    }).not.toThrow()
  })
})
