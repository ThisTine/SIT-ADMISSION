import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import BlurCard from "../../components/BlurCard";
import Devider from "../../components/Devider";
import FloatingInput from "../../components/FloatingInput";
import StepComponents, {
  StepComponentsProps,
} from "../../components/steps/StepComponents";
import Welcome from "../../components/steps/Welcome";
import RegisterContextProvider, {
  registerDataContext,
} from "../../context/RegisterDataContext";
import AppLayout from "../../Layout/AppLayout";
import {
  optionsTypes,
  stepone,
  stepsParent,
  stepthree,
  steptwo,
} from "./stepsdata";

const Home = () => {
  const { addressContext } = useContext(registerDataContext);
  const so = stepone.map((item) => ({
    ...item,
    components: item.components.map((i) => ({
      ...i,
      steps: i.steps.map((j) => {
        let options: optionsTypes[] = j.options || [];
        if (j.key === "province" && addressContext.address) {
          options = [
            {
              label: addressContext.address.province_name_th,
              value: addressContext.address.province_id + "",
            },
          ];
        }
        if (j.key === "district" && addressContext.address) {
          options = [
            ...addressContext.address.amphures.map((item) => ({
              label: item.amphure_name_th,
              value: item.amphure_id + "",
            })),
          ];
        }
        if (j.key === "sub-district" && addressContext.address) {
          let tambons = addressContext.address.amphures.filter(
            (i) => i.amphure_id + "" === addressContext.district + ""
          )[0]?.tambons;

          if (tambons)
            options = tambons.map((item) => ({
              label: item.name_th,
              value: item.id + "",
            }));
        }

        return { ...j, options };
      }),
    })),
  }));
  const steps = [so, steptwo, stepthree];

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

const HomeWithContext: FC = (props) => {
  return (
    <RegisterContextProvider>
      <Home {...props} />
    </RegisterContextProvider>
  );
};

export default HomeWithContext;
