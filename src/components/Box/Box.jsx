import React from "react";
import styled from "styled-components";

const Box = ({ children }) => {
  return <BoxContainer>{children}</BoxContainer>;
};

const BoxContainer = styled.div`
  background-color: var(--blackE);
  padding: 8px;
  border-radius: 8px;
  display: flex;
  margin: 0 8px;
  border: 0.6px solid var(--blackA);
`;

export default Box;
