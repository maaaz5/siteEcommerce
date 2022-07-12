import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "../../Styles/styles/globalStyles";
import Buttonoutlined from "../buttons/Buttonoutlined";
import ThreeProducstRow from "../product/ThreeProducstRow";

const HeadlineSection = (props) => {
  return (
    <InnerWrapper>
      <Wrapper>
        <header>
          <h3>{props.Headline}</h3>
          <Buttonoutlined
            fontSize="var(--btnFontSize)"
            title="Check More!"
            url="#"
            filled="light"
            right
          />
        </header>
        <ThreeProducstRow num="4" products={props.products} width="100%" />
      </Wrapper>
    </InnerWrapper>
  );
};
const Wrapper = styled.div`
  padding: 3rem 0rem;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    h3 {
      font-size: var(--S4);
      color: var(--blackA);
    }
  }
`;
export default HeadlineSection;
