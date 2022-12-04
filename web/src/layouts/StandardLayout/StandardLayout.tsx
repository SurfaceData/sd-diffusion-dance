import { Container, Flex } from '@chakra-ui/react'

import NavBar from 'src/components/NavBar'
import SurfaceFooter from 'src/components/ui/SurfaceFooter'

const StandardLayout = ({ children }) => {
  return (
    <Flex direction="column" flex="1" h="100vh">
      <NavBar />
      <Flex as="main" role="main" direction="column" flex="1" pt="2">
        <Container flex="1" maxW="full">
          {children}
        </Container>
      </Flex>
      <SurfaceFooter />
    </Flex>
  )
}

export default StandardLayout
