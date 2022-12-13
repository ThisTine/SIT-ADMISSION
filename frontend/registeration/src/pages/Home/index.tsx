import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import AppLayout from '../../Layout/AppLayout'

const Home = () => {
  return (
    <AppLayout>
    <VStack h="100vmin" justifyContent={"center"} >
    <Heading>Hi, This is SIT-ADMISSION (userpage)</Heading>
    </VStack>
    </AppLayout>
  )
}

export default Home