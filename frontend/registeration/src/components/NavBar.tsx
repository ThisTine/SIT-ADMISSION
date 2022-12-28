import { HStack, Container, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack
      w="100%"
      bg="rgba(255,255,255,0.3)"
      zIndex={"dropdown"}
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
          <Link to="/review">
            <Button variant={"sit-blue"} px={5}>
              ตรวจสอบผล
            </Button>
          </Link>
        </HStack>
      </Container>
    </HStack>
  );
};

export default NavBar;
