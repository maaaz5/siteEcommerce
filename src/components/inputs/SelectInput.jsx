import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Countries from "./Countries";
import styled from "styled-components";
export default function BasicSelect() {
  return (
    <SelectWrapper>
      <InputLabel id="countrySelect">Country</InputLabel>
      <select labelId="countrySelect" id="countrySelect">
        <option value="" selected={true} disabled>
          Choose your country
        </option>
        {Countries.map((ct) => (
          <option value={ct.value}>{ct.text}</option>
        ))}
      </select>
    </SelectWrapper>
  );
}
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  select {
    width: 100%;
    font-weight: 500;
    border: 1px solid var(--blackD);
    border-radius: 1rem;
    background: var(--blackH);
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 0.9rem 1.2rem;
    &:focused {
      outline: 3px solid blue;
    }

    option {
      img {
        width: 20px;
        height: auto;
      }
    }
  }
`;
const InputLabel = styled.label`
  font-size: var(--S6);
  font-weight: bold;
  color: var(--blackA);
`;
