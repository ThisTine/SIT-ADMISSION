import { ChakraTheme } from "@chakra-ui/react";
import bg from "../assets/bg.png";

const styles: ChakraTheme["styles"] = {
  global: () => ({
    "body,html": {
      minH: "calc(100vh - 70px)",
      bgImage: bg,
      bgSize: "cover",
      bgAttachment: "fixed",
    },
  }),
};

export default styles;
