import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { FC, forwardRef } from "react";

interface controlledInputProps {
  label: string;
  description?: string;
  input?: InputProps;
  error?: string;
}

const ControlledInput: FC<controlledInputProps> = forwardRef((props, ref) => {
  return (
    <FormControl isInvalid={!!props.error}>
      <FormLabel>{props.label}</FormLabel>
      <Input {...props.input} ref={ref as any} />
      {props.error ? (
        <FormHelperText>{props.description}</FormHelperText>
      ) : (
        <FormErrorMessage>{props.error}</FormErrorMessage>
      )}
    </FormControl>
  );
});

export default ControlledInput;
