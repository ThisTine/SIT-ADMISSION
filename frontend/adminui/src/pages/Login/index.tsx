import { Box, Button, Center, Heading, Input, VStack } from "@chakra-ui/react";
import React from "react";
import FloatingInput from "../../components/FloatingInput";
import FloatingForm from "../../config/components/FloatingForm";
import AppLayout from "../../Layout/AppLayout";

const index = () => {
  return (
    <AppLayout>
      <Center>
        <Box
          mt={5}
          bg="white"
          w="container.sm"
          p={5}
          rounded="2xl"
          shadow={"sm"}
        >
          <Heading textAlign={"center"}>Login</Heading>
          <Center>
            <VStack gap={5} mt={5} w="md">
              <Input placeholder="Username" size={"lg"} />
              <Input placeholder="Password" size={"lg"} type="password" />
              <Button size={"lg"} w="100%" colorScheme={"blue"}>
                Login
              </Button>
            </VStack>
          </Center>
        </Box>
      </Center>
    </AppLayout>
  );
};

export default index;
