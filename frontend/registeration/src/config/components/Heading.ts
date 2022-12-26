import { ChakraTheme } from "@chakra-ui/react";

const Heading: ChakraTheme["components"] = {
  Heading: {
    baseStyle: {
      color: "white",
      fontWeight: 700,
    },
    defaultProps: {
      size: "lg",
    },
  },
};

export default Heading;
