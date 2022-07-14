import React from "react";
import styled from "styled-components";

const CheckboxInput = (props) => {
  return (
    <Wrapper>
      <label htmlFor={props.id}>
        <InputWrapper>
          <input type="radio" id={props.id} name="radio" />
          {props.brand}
        </InputWrapper>

        <p>
          <Price>+{props.price} USD</Price> Additional price
        </p>
        <ImgWrapper>
          <img src={props.brandimg} />
        </ImgWrapper>
      </label>
    </Wrapper>
  );
};
const ImgWrapper = styled.div`
  justify-self: flex-end;
`;

const Wrapper = styled.div`
  margin: 1rem 0rem;
  background-color: var(--blackF);
  border: 1px solid var(--blackD);
  color: var(--blackA);
  border-radius: 1.5rem;
  padding: 1rem 1.4rem;
  label {
    p {
      font-size: var(--S6);
      color: var(--blackA) !important;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Price = styled.span`
  color: var(--greenB);
  margin-right: 0.5rem;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0rem 1rem;
  font-size: var(--S6);
  color: var(--blackA);
  font-weight: bold;
`;
export default CheckboxInput;
