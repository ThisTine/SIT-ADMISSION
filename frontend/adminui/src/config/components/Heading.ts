import { ChakraTheme } from "@chakra-ui/react";

const Heading: ChakraTheme["components"] = {
  Heading: {
    baseStyle: {
      fontWeight: 700,
      fontStyle: "bold",
    },
    defaultProps: {
      size: "lg",
    },
  },
};

export default Heading;
