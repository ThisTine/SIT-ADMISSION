import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import BlurCard from "../../components/BlurCard";
import Devider from "../../components/Devider";
import FloatingInput from "../../components/FloatingInput";
import StepComponents from "../../components/steps/StepComponents";
import Welcome from "../../components/steps/Welcome";
import AppLayout from "../../Layout/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      {/* <Welcome /> */}
      <StepComponents />
    </AppLayout>
  );
};

export default Home;
