import { ChakraTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.95) translateY(-25px)",
};

const FloatingForm: ChakraTheme["components"] = {
  Form: {
    variants: {
      floating: {
        container: {
          _focusWithin: {
            label: {
              ...activeLabelStyles,
            },
          },
          "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
            {
              ...activeLabelStyles,
            },
          label: {
            color: "black",
            top: 0,
            left: 0,
            zIndex: 2,
            position: "absolute",
            pointerEvents: "none",
            mx: 3,
            px: 1,
            my: 3,
            transformOrigin: "left top",
          },
        },
      },
    },
  },
};

export default FloatingForm;
