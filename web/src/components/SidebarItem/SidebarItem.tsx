import {
  As,
  Button,
  ButtonProps,
  Icon,
  HStack,
  Show,
  Text,
} from '@chakra-ui/react'

interface SidebarItemProps extends ButtonProps {
  icon: As
  label: string
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, label, ...rest } = props
  return (
    <Button variant="ghost" justifyContent="start" {...rest}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" />
        <Show above="lg">
          <Text>{label}</Text>
        </Show>
      </HStack>
    </Button>
  )
}

export default SidebarItem
