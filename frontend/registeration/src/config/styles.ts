import { ChakraTheme } from "@chakra-ui/react";
import bg from "../assets/bg.png";

const styles: ChakraTheme["styles"] = {
  global: () => ({
    "body,html": {
      minH: "100vh",
      bgImage: bg,
      bgSize: "cover",
    },
  }),
};

export default styles;
