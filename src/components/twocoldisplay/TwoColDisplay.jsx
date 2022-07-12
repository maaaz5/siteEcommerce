import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "../../Styles/styles/globalStyles";
const TwoColDisplay = (props) => {
  return (
    <InnerWrapper>
      <Wrapp>
        {props.left}
        {props.right}
      </Wrapp>
    </InnerWrapper>
  );
};
const Wrapp = styled.div`
  margin: 4rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0rem 1rem;
`;
export default TwoColDisplay;
