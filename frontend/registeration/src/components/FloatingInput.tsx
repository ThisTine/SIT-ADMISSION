import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputProps,
} from "@chakra-ui/react";
import { FC } from "react";

const sitInput: InputProps = {
  bg: "rgba(255,255,255,0.3)",
  p: 2,
  py: 3,
  borderBottom: "4px solid rgba(255,255,255,0.7)",
  color: "white",
  _focus: {
    bg: "rgba(255,255,255,0.15)",
    borderColor: "#589CDF",
  },
  borderRadius: "sm",
  shadow: "lg",
};

interface FloatingInputProps {
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  input?: InputProps;
  isRequired?: boolean;
  isInvalid?: boolean;
}

const FloatingInput: FC<FloatingInputProps> = (props) => {
  return (
    <FormControl
      variant="floating"
      isRequired={props.isRequired}
      isInvalid={props.isInvalid}
    >
      <Input
        variant={"unstyled"}
        placeholder=" "
        {...sitInput}
        {...props.input}
      />
      <FormLabel>{props.placeholder}</FormLabel>
      <FormHelperText>{props.description}</FormHelperText>
      <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default FloatingInput;
