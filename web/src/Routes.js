import { Private, Router, Route, Set } from '@redwoodjs/router'

import AdminLayout from 'src/layouts/AdminLayout'
import AuthLayout from 'src/layouts/AuthLayout'
import ProfileLayout from 'src/layouts/ProfileLayout'
import StandardLayout from 'src/layouts/StandardLayout'
import StewardLayout from 'src/layouts/StewardLayout'

const Routes = () => {
  //ddkroles={['admin', 'steward']}>
  return (
    <Router>
      <Set wrap={AuthLayout}>
        <Route path="/signin" page={AuthSigninPage} name="signin" />
        <Route path="/signup" page={AuthSignupPage} name="signup" />
      </Set>

      <Private unauthenticated="home">
        <Set wrap={ProfileLayout}>
          <Route path="/profile/info" page={GeneralProfileInfoPage} name="profileInfo" />
          <Route path="/profile/account-settings" page={GeneralProfileAccountSettingsPage} name="profileAccountSettings" />
        </Set>
      </Private>

      <Private unauthenticated="home">
        <Set wrap={StewardLayout}>
          <Route path="/steward/review" page={StewardStewardReviewPage} name="stewardReview" />
        </Set>
      </Private>

      <Private unauthenticated="home">
        <Set wrap={AdminLayout}>
          <Route path="/admin/manage-users" page={AdminAdminManageUsersPage} name="adminManageUsers" />
        </Set>
      </Private>

      <Set wrap={StandardLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
