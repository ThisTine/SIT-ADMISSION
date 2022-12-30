import { ChakraTheme } from "@chakra-ui/react";
import bg from "../assets/bg.png";

const styles: ChakraTheme["styles"] = {
  global: () => ({
    "body,html": {
      minH: "calc(100vh - 70px)",
      bg: "gray.50",
    },
  }),
};

export default styles;
