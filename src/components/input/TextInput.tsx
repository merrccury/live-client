import * as React from "react";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { natural } from "../styles";
import { useEffect } from "react";

const StyledInputElement = styled("input")(
  ({ theme }) => `
  all: unset;
  font-size: 1rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  color: ${natural[60]};
  border: none;
  border-radius: none;
  width: 100%;
  margin-left: 0.75rem;
`
);

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  display: flex;
  font-weight: 500;
  border: 1px solid ${natural[90]};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 43px;
`
);

const StyledErrorElement = styled("span")`
  position: relative;
  color: #f2c5c5;
  border-radius: 5px;
  top: -12px;
  left: 10px;
  font-size: 0.7rem;
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
  //background: #0a0a0a;
  background: #160b0b;
  border: 1px solid #dd3d32;
`;

type TextInputProps = InputUnstyledProps & {
  errorMessage?: string;
};

const TextInput = React.forwardRef(function CustomInput(
  props: TextInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { components, errorMessage, ...other } = props;
  return (
    <div style={{ height: "50px" }}>
      <InputUnstyled
        components={{
          Root: StyledInputRoot,
          Input: StyledInputElement,
          ...components,
        }}
        {...other}
        ref={ref}
      />
      {errorMessage && <StyledErrorElement>{errorMessage}</StyledErrorElement>}
    </div>
  );
});
export { TextInput };
