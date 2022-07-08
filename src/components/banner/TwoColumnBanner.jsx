import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "../../Styles/styles/globalStyles";
import Banner from "./Banner";
const TwoColumnBanner = () => {
  return (
    <InnerWrapper>
      <TwoCol>
        <Banner subtitle="hello" title="hello" />
        <Banner subtitle="hello" title="hello" />
      </TwoCol>
    </InnerWrapper>
  );
};
const TwoCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0rem 4rem;
  div {
    flex-grow: 1;
  }
`;
export default TwoColumnBanner;
