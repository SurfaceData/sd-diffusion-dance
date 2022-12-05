import { Wrap, WrapItem } from '@chakra-ui/react'

import RelatedImage from 'src/components/RelatedImage'

const PromptAnalysis = ({ data }) => {
  return (
    <Wrap my="2">
      {data.neighbor.map((neighbor, index) => (
        <WrapItem key={index}>
          <RelatedImage data={neighbor} />
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default PromptAnalysis
