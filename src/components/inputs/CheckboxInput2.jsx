import React from "react";
import styled from "styled-components";

const CheckboxInput2 = (props) => {
  return (
    <Wrapper>
      <label htmlFor={props.id}>
        <InputWrapper>
          <input type="checkbox" id={props.id} name={props.id} />
          {props.brand}
        </InputWrapper>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem 0rem;
  background-color: var(--blackF);
  border: 1px solid var(--blackD);
  color: var(--blackA);
  border-radius: 1.5rem;
  padding: 1rem 1.4rem;
  width: 100%;
  label {
    p {
      font-size: var(--S6);
      color: var(--blackA) !important;
    }
    display: flex;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0rem 1rem;
  font-size: var(--S6);
  color: var(--blackA);
  font-weight: 500;
`;
export default CheckboxInput2;
