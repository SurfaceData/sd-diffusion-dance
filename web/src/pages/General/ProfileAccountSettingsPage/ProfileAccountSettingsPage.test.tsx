import { render } from '@redwoodjs/testing/web'

import ProfileAccountSettingsPage from './ProfileAccountSettingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfileAccountSettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileAccountSettingsPage />)
    }).not.toThrow()
  })
})
