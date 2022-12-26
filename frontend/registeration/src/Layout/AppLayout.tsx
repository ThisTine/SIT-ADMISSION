import { Box, Container } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      maxW="container.md"
      w="100%"
      minH={"100vh"}
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      {...{ children }}
    />
  );
};

export default AppLayout;
