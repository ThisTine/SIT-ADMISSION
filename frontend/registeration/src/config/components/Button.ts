import { ChakraTheme } from "@chakra-ui/react";

const Button: ChakraTheme["components"] = {
  Button: {
    baseStyle: {
      fontWeight: 400,
    },
    variants: {
      "sit-blue": {
        px: 10,
        bgGradient: "linear(to-b,#508FCE,#234D77)",
        backgroundSize: "100% 200%",
        rounded: "full",
        backgroundPosition: "0 25%",
        color: "white",
        transition: "0.5s all",
        _hover: {
          backgroundPosition: "0 100%",
        },
      },
    },
  },
};

export default Button;
