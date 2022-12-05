import { Box, Icon, Image, Link, Text } from '@chakra-ui/react'

import { FaExternalLinkAlt } from 'react-icons/fa'

const RelatedImage = ({ data }) => {
  return (
    <Box width="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image boxSize="240px" src={data.url} alt={data.caption} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            similarity &bull; {data.similarity.toFixed(4)}
          </Box>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {data.caption}
        </Box>

        <Box fontSize="xs">
          <Link href={data.url} isExternal>
            origin <Icon as={FaExternalLinkAlt} mx="2px" />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default RelatedImage
