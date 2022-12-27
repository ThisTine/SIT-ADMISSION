import {
  Box,
  Button,
  ButtonProps,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import Select from "../Select";
import { stepone, stepsParent } from "../../pages/Home/stepsdata";
import BlurCard from "../BlurCard";
import Devider from "../Devider";
import FloatingInput from "../FloatingInput";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SpecialSelect from "../SpecialSelect";
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";

export interface StepComponentsProps {
  next?: ButtonProps;
  back?: ButtonProps;
  stepForm: stepsParent[];
  setdata: Dispatch<SetStateAction<Record<string, string>>>;
}
const StepComponents: FC<StepComponentsProps> = ({
  next,
  back,
  stepForm,
  setdata,
}) => {
  const { register, handleSubmit, formState } = useForm<any>();
  const onSubmit = (data: any) => {
    console.log(data);
    setdata((val) => ({ ...val, ...data }));
    (next as any).onClick();
  };
  return (
    <BlurCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        {stepForm.map((item) => (
          <Box key={item.title} w="100%">
            <Heading>{item.title}</Heading>
            <Devider mb={10} />
            <VStack gap={3}>
              {item.components.map((comp, ind) => (
                <SimpleGrid
                  w="100%"
                  columns={comp.columns || 1}
                  key={ind}
                  gap={3}
                >
                  {comp.steps.map((step) => (
                    <Box w="100%" key={step.key}>
                      {step.type === "special-select" ? (
                        <SpecialSelect
                          {...{ step }}
                          register={register(step.key)}
                        />
                      ) : step.type === "select" ? (
                        <Select
                          options={step.options}
                          placeholder={step.placeholder}
                          required={step.isRequired}
                          {...(register(step.key, {
                            required: step.isRequired,
                          }) as any)}
                        />
                      ) : (
                        <FloatingInput
                          {...step}
                          {...register(step.key, {
                            required: step.isRequired,
                          })}
                        />
                      )}
                    </Box>
                  ))}
                </SimpleGrid>
              ))}
            </VStack>
          </Box>
        ))}
        <HStack pt={10} w="100%">
          {back && (
            <Button
              mr="auto"
              leftIcon={<SlArrowLeft />}
              variant={"sit-gray"}
              size="lg"
              {...back}
            />
          )}
          {next && (
            <Button
              ml="auto"
              rightIcon={<SlArrowRight />}
              variant={"sit-green"}
              size="lg"
              {...next}
              onClick={() => {}}
              type="submit"
            />
          )}
        </HStack>
      </form>
    </BlurCard>
  );
};

export default StepComponents;
