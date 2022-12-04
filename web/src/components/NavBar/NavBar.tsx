import {
  Avatar,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Link, navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Button, Navigation } from '@surfacedata/sd-components'

import md5 from 'md5'
import {
  FaCog,
  FaTasks,
  FaRegAddressCard,
  FaSignOutAlt,
  FaUserCircle,
} from 'react-icons/fa'

function getGravatarURL(email) {
  const address = String(email).trim().toLowerCase()
  const hash = md5(address)
  return `https://www.gravatar.com/avatar/${hash}`
}

const UserProfile = () => {
  const { currentUser, isAuthenticated, logOut } = useAuth()
  const onLogout = async () => {
    await logOut()
    navigate(routes.home())
  }

  if (isAuthenticated) {
    const image = currentUser.image || getGravatarURL(currentUser.email)
    return (
      <Menu>
        <MenuButton as={Avatar} src={image} />
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem
              icon={<FaUserCircle />}
              onClick={() => navigate(routes.profileInfo())}
            >
              Info
            </MenuItem>
            <MenuItem
              icon={<FaCog />}
              onClick={() => navigate(routes.profileAccountSettings())}
            >
              Settings
            </MenuItem>
          </MenuGroup>

          <MenuGroup title="Steward">
            <MenuItem
              icon={<FaTasks />}
              onClick={() => navigate(routes.stewardReview())}
            >
              Review
            </MenuItem>
          </MenuGroup>

          <MenuGroup title="Admin">
            <MenuItem
              icon={<FaRegAddressCard />}
              onClick={() => navigate(routes.adminManageUsers())}
            >
              Manage Users
            </MenuItem>
          </MenuGroup>

          <MenuDivider />
          <MenuItem icon={<FaSignOutAlt />} onClick={onLogout}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    )
  }
  return (
    <Link to={routes.signin()}>
      <Button size="sm">Signin</Button>
    </Link>
  )
}

const NavBar = () => {
  return (
    <Navigation
      avatar={<UserProfile />}
      logo={
        <Link to={routes.home()}>
          <Image src="/svg/surface-data.svg" />
        </Link>
      }
    />
  )
}

export default NavBar
