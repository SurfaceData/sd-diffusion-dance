import { Box, HStack, Image, Wrap, WrapItem } from '@chakra-ui/react'
import RelatedImage from 'src/components/RelatedImage'

const GenerationResult = ({ data }) => {
  return (
    <Box>
      <HStack>
        <Image src={data.content} />
        <Box>
          <Wrap my="2">
            {data.neighbor.map((neighbor, index) => (
              <WrapItem key={index}>
                <RelatedImage data={neighbor} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </HStack>
    </Box>
  )
}

export default GenerationResult
