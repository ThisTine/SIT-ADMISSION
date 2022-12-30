import { ChakraTheme } from "@chakra-ui/react";
import Button from "./components/Button";
import FloatingForm from "./components/FloatingForm";
import Heading from "./components/Heading";
import Text from "./components/Text";

const components: ChakraTheme["components"] = {
  ...Heading,
  ...Text,
  ...Button,
  ...FloatingForm,
};

export default components;
