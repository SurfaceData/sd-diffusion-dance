import { Container, Flex } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { FaCog, FaUserCircle } from 'react-icons/fa'

import NavBar from 'src/components/NavBar'
import Sidebar from 'src/components/Sidebar'
import SidebarItem from 'src/components/SidebarItem'
import SurfaceFooter from 'src/components/ui/SurfaceFooter'

type ProfileLayoutProps = {
  children?: React.ReactNode
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <Flex direction="column" flex="1" h="100vh">
      <NavBar />
      <Flex as="main" role="main" direction="row" flex="1" pt="2">
        <Sidebar>
          <SidebarItem
            icon={FaUserCircle}
            label="Info"
            as={Link}
            to={routes.profileInfo()}
          />
          <SidebarItem
            icon={FaCog}
            label="Settings"
            as={Link}
            to={routes.profileAccountSettings()}
          />
        </Sidebar>
        <Flex direction="column" width="full">
          <Container flex="1" maxW="full">
            {children}
          </Container>
          <SurfaceFooter />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProfileLayout
