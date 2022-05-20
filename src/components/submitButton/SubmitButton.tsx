import { styled } from "@mui/system";
import { natural, primary } from "../styles";
import * as React from "react";
import clsx from "clsx";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import ButtonUnstyled, {
  useButton,
  UseButtonRootSlotProps,
} from "@mui/base/ButtonUnstyled";
import { UseButtonParameters } from "@mui/base/ButtonUnstyled/useButton.types";

// const SubmitButton = styled(ButtonUnstyled)(
//   ({ theme }) => `
//   font-size: 0;
//   position: relative;
//   display: inline-block;
//   width: 40px;
//   height: 20px;
//   margin: 10px;
//   background: ${natural[60]};
//   border-radius: 10px;
//   cursor: pointer;
//
//   &.Switch-disabled {
//     opacity: 0.4;
//     cursor: not-allowed;
//   }
//
//   &.Switch-checked {
//     background: ${primary[400]};
//   }
//   `
// );

const SubmitButtonRoot = styled(ButtonUnstyled)`
  all: unset;
  background: #4c4ddc;
  color: white;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

interface SubmitButtonProps extends UseButtonParameters {
  children: string;
}

const SubmitButton = React.forwardRef(function CustomInput(
  props: SubmitButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { active, disabled, setFocusVisible, focusVisible, getRootProps } =
    useButton(props);

  const { children } = props;

  const stateClasses = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <SubmitButtonRoot {...getRootProps()} className={clsx(stateClasses)}>
      {children}
    </SubmitButtonRoot>
  );
});
export { SubmitButton };
