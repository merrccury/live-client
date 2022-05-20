import { styled } from "@mui/system";
import { ButtonUnstyled } from "@mui/base";

export const InputAdornment = styled("div")`
  padding: 0;
  margin: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const IconButton = styled(ButtonUnstyled)`
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
`;
