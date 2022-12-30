import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputProps,
} from "@chakra-ui/react";
import {
  ChangeEvent,
  FC,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
// import { registerDataContext } from "../context/RegisterDataContext";

export const sitInput: InputProps = {
  bg: "rgba(255,255,255,0.3)",
  p: 2,
  py: 3,
  borderBottom: "4px solid rgba(255,255,255,0.7)",
  color: "black",
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
  name?: string;
}

const FloatingInput: FC<FloatingInputProps> = forwardRef((props, ref) => {
  // const [text, setText] = useState("");
  // const { data, setData } = useContext(registerDataContext);
  // console.log(props);
  // const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (props.name && typeof props.name === "string") {
  //     setData((v) => ({ ...v, [props.name as string]: e.target.value }));
  //   }
  //   if ((props as any).onChange) {
  //     (props as any).onChange(e);
  //   }
  //   if (props.input?.onChange) {
  //     props.input.onChange(e);
  //   }
  // };
  return (
    <FormControl
      variant="floating"
      isRequired={props.isRequired}
      isInvalid={props.isInvalid}
    >
      <Input
        variant={"unstyled"}
        ref={ref as any}
        {...props}
        {...sitInput}
        {...props.input}
        placeholder=" "
      />
      <FormLabel>{props.placeholder}</FormLabel>
      <FormHelperText>{props.description}</FormHelperText>
      <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
    </FormControl>
  );
});

export default FloatingInput;
