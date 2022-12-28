import {
  Box,
  Button,
  HStack,
  RadioGroupProps,
  RadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { FC, forwardRef, useContext } from "react";
import { UseFormRegister } from "react-hook-form";
import { registerDataContext } from "../context/RegisterDataContext";
import { step } from "../pages/Home/stepsdata";

const RadioCard: FC<RadioProps> = (radio) => {
  const { getInputProps, getCheckboxProps } = useRadio(radio);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        px={9}
        bgGradient="linear(to-b,#ACACAC,#535353)"
        py={3}
        rounded="full"
        color="white"
        _checked={{ bgGradient: "linear(to-b,#508FCE,#234D77)" }}
        cursor="pointer"
      >
        {radio.children}
      </Box>
    </Box>
  );
};

const SpecialSelect: FC<{
  step: step;
  radioProps?: RadioGroupProps;
  register: any;
}> = forwardRef(
  ({ step: { options, key, isRequired }, radioProps, register }, ref) => {
    const { data, setData } = useContext(registerDataContext);
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: key,
      ...radioProps,
      value: data[key],
    });
    const group = getRootProps();
    return (
      <Box>
        <HStack
          gap={4}
          {...group}
          ref={ref as any}
          {...register}
          onChange={(e) =>
            setData((v) => ({ ...v, [key]: (e.target as any).value }))
          }
        >
          {options?.map((item) => {
            const radio = getRadioProps({ value: item.value });
            return (
              <RadioCard key={item.value} {...radio} isRequired={isRequired}>
                {item.label}
              </RadioCard>
            );
          })}
        </HStack>
      </Box>
    );
  }
);

export default SpecialSelect;
