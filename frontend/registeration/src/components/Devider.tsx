import { Box, ChakraComponent } from '@chakra-ui/react'
import React from 'react'

const Devider:ChakraComponent<"div", {}> = (props) => {
  return (
    <Box mt={5} mb={3} height={"9px"} w={"45%"} bg="#589CDF" {...props} />

  )
}

export default Devider