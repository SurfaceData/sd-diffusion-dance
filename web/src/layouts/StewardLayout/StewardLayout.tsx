import { Container, Flex } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { FaTasks } from 'react-icons/fa'

import NavBar from 'src/components/NavBar'
import Sidebar from 'src/components/Sidebar'
import SidebarItem from 'src/components/SidebarItem'
import SurfaceFooter from 'src/components/ui/SurfaceFooter'

type StewardLayoutProps = {
  children?: React.ReactNode
}

const StewardLayout = ({ children }: StewardLayoutProps) => {
  return (
    <Flex direction="column" flex="1" h="100vh">
      <NavBar />
      <Flex as="main" role="main" direction="row" flex="1" pt="2">
        <Sidebar>
          <SidebarItem
            icon={FaTasks}
            label="Review"
            as={Link}
            to={routes.stewardReview()}
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

export default StewardLayout
