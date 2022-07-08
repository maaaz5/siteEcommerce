import React from "react";
import styled from "styled-components";
import { SubTitle, Title } from "../../Styles/styles/globalStyles";
import Buttonoutlined from "../buttons/Buttonoutlined";
const Banner = (props) => {
  return (
    <Bann>
      <SubTitle>{props.subtitle}</SubTitle>
      <Title>{props.title}</Title>

      <Buttonoutlined
        url="#"
        title="Read recepies"
        right
        border
        fontSize="var(--btnFontSize)"
      />
    </Bann>
  );
};
const Bann = styled.div`
  border-radius: 2rem;

  p:nth-child(1) {
    color: var(--greenB);
  }
  p:nth-child(2) {
    margin-top: 1rem;
    margin-bottom: 7rem;
    color: var(--blackA);
  }
  padding: 4rem 2.5rem;
  background-color: var(--blackF);
`;
export default Banner;
