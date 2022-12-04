import { Flex, Stack, useBreakpointValue } from '@chakra-ui/react'

type SidebarProps = {
  children?: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Flex as="section" minHeight="100vh" bg="brand.300" borderRadius="sm">
      <Flex flex="1" width={isDesktop ? '64' : '18'} px="2" py="2">
        <Stack spacing="6" width="full">
          <Stack spacing="1">{children}</Stack>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Sidebar
