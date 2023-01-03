import { HStack, Container, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { ActionType, userContext } from "../context/UserContext";
const NavBar = () => {
  const { dispatch } = useContext(userContext);
  return (
    <HStack
      w="100%"
      bg="rgba(255,255,255,0.3)"
      zIndex={100}
      top={0}
      py={2}
      pos="fixed"
      backdropFilter={"blur(10px)"}
      borderBottom="1px solid rgba(255,255,255,0.4)"
    >
      <Container w="100%" maxW="container.xl">
        <HStack w="100%" justifyContent={"space-between"}>
          <Link to="/">
            <img src={logo} />
          </Link>
          <Button onClick={() => dispatch({ type: ActionType.LOGOUT })}>
            Logout
          </Button>
        </HStack>
      </Container>
    </HStack>
  );
};

export default NavBar;
