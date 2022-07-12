import * as React from "react";
import Box from "@mui/material/Box";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { styled as stls } from "@mui/system";
import styled from "styled-components";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputRoot = stls("div")(
  ({ theme }) => `
  display: flex;
  font-weight: 500;
  border: 1px solid var(--blackD);
  border-radius: 1rem;
  background: var(--blackH);
  align-items: center;
  justify-content: center;

  &.${inputUnstyledClasses.focused} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
`
);

const StyledInputElement = stls("input")(
  ({ theme }) => `
  font-size: var(--body);
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: var(--blackA);
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 1rem 1.2rem;
  outline: 0;
`
);

const InputAdornment = stls("div")`
  font-size: var(--body);
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { components, ...other } = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
    />
  );
});

const Inuput = () => {
  return (
    <InputWraper>
      <InputLabel htmlFor="dummy">Text Label</InputLabel>
      <CustomInput
        id="dummy"
        startAdornment={<InputAdornment>kg</InputAdornment>}
        placeholder="dummy text "
      />
    </InputWraper>
  );
};
const InputWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const InputLabel = styled.label`
  font-size: var(--S6);
  font-weight: bold;
  color: var(--blackA);
`;
export default Inuput;
