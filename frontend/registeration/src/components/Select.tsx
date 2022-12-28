import { FC, forwardRef, useEffect } from "react";
import { useController } from "react-hook-form";
import ReactSelect from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/stateManager";

const Select: FC<StateManagerProps> = forwardRef((props, ref) => {
  useEffect(() => {
    if (props.options?.length === 1) {
      (props as any).onChange(
        {
          target: { value: (props.options[0] as any).value, name: props.name },
        },
        "" as any
      );
    }
  }, [props.options]);
  return (
    <ReactSelect
      {...(props.options?.length === 1 && { value: props.options[0] })}
      isDisabled={(props.options?.length || 0) <= 1}
      styles={{
        container: (base) => ({ ...base, zIndex: 3 }),
        control: (base, state) => ({
          ...base,
          background: state.isDisabled
            ? "rgba(0,0,0,0.2)"
            : "rgba(255,255,255,0.3)",
          color: "white",
          border: 0,
          borderRadius: 0,
          borderBottom: "4px solid rgba(255,255,255,0.7)",
          ":hover": {
            borderColor: "rgba(255,255,255,0.7)",
          },
          ":focus-within": {
            borderBottom: "4px solid",
            borderColor: "#589CDF",
          },
          borderColor: state.isFocused ? "#589CDF" : "rgba(255,255,255,0.7)",
          padding: 5,
        }),
        input: (base) => ({
          ...base,
          background: "transparent",
          color: "white",
        }),
        placeholder: (base, state) => ({
          ...base,
          color: state.isDisabled ? "rgba(255,255,255,0.6)" : "white",
          ...(state.selectProps.required && {
            ":after": { content: `" *"`, color: "red" },
          }),
        }),
        singleValue: (base) => ({ ...base, color: "white" }),
      }}
      {...props}
      ref={ref as any}
      onChange={(newValue: any) => {
        (props as any).onChange(
          { target: { value: newValue.value, name: props.name } },
          "" as any
        );
      }}
    />
  );
});

export default Select;
