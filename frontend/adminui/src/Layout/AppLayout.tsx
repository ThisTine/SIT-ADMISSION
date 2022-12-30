import { Box, Container } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import NavBar from "../components/NavBar";
const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container
        mt={"70px"}
        maxW="container.xl"
        w="100%"
        // minH={"calc(100vh - 70px)"}
        // display="flex"
        // alignItems={"center"}
        // justifyContent="center"
        {...{ children }}
      />
    </>
  );
};

export default AppLayout;
