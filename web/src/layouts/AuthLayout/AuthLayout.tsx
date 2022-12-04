import { Box, Container, Flex, Image } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { Button, Navigation } from '@surfacedata/sd-components'

import SurfaceFooter from 'src/components/ui/SurfaceFooter'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Flex direction="column" flex="1" h="100vh">
      <Navigation
        logo={
          <Link to={routes.home()}>
            <Image src="/svg/surface-data.svg" />
          </Link>
        }
      />
      <Flex as="main" role="main" direction="row" flex="1" py="16">
        <Container align="center">{children}</Container>
      </Flex>
      <SurfaceFooter />
    </Flex>
  )
}

export default AuthLayout
