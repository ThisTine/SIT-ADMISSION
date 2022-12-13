import { Box, Container } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

const AppLayout:FC<{children:ReactNode}> = ({children}) => {
  return (
    <Container maxW="container.lg" w="100%" {...{children}} />
  )
}

export default AppLayout