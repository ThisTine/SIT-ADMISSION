import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import BlurCard from "../../components/BlurCard";
import Devider from "../../components/Devider";
import FloatingInput from "../../components/FloatingInput";
import StepComponents, {
  StepComponentsProps,
} from "../../components/steps/StepComponents";
import Welcome from "../../components/steps/Welcome";
import AppLayout from "../../Layout/AppLayout";
import { stepone, stepsParent, stepthree, steptwo } from "./stepsdata";

const steps = [stepone, steptwo, stepthree];

const Home = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [data, setdata] = useState<Record<string, string>>({});
  const buttonBuilder = (formInd: number, totalIndex: number) => {
    const back = {
      children: "Back",
      onClick: () => {
        setFormIndex((val) => val - 1);
      },
    };
    const next = {
      children: "Next",
      onClick: () => {
        setFormIndex((val) => val + 1);
      },
    };
    const submit = {
      rightIcon: <></>,
      children: "Submit",
      onClick: () => {},
    };
    const logout = {
      leftIcon: <></>,
      children: "Clear",
      onClick: () => {
        setEmail("");
      },
    };
    return {
      ...(formInd > 0 ? { back } : { back: logout }),
      ...(formInd + 1 === totalIndex ? { next: submit } : { next }),
    };
  };
  return (
    <AppLayout>
      {!email ? (
        <Welcome setUserEmail={setEmail} />
      ) : (
        <StepComponents
          stepForm={steps[formIndex]}
          setdata={setdata}
          {...buttonBuilder(formIndex, steps.length)}
        />
      )}
    </AppLayout>
  );
};

export default Home;
