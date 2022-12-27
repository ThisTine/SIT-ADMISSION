import { FC, forwardRef } from "react";
import ReactSelect from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/stateManager";

const Select: FC<StateManagerProps> = forwardRef((props, ref) => {
  return (
    <ReactSelect
      styles={{
        container: (base) => ({ ...base, zIndex: 3 }),
        control: (base, state) => ({
          ...base,
          background: "rgba(255,255,255,0.3)",
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
          color: "white",
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
