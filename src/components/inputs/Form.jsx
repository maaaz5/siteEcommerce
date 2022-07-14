import React from "react";
import styled from "styled-components";
import Input from "./../../components/inputs/Input";
import BasicSelect from "./../../components/inputs/SelectInput";
const Form = () => {
  return (
    <div>
      <Row>
        <Input
          label="First name"
          placeholder="First name"
          type="text"
          id="fn"
        />
        <Input label="Last name" placeholder="Last name" type="text" id="ln" />
      </Row>
      <Row>
        <Input
          label="Email adress"
          placeholder="Email adress"
          type="email"
          id="email"
        />
        <Input
          label="Phone number"
          placeholder="Phone number"
          type="number"
          id="num"
        />
      </Row>
      <Row>
        {" "}
        <Input label="Adress" placeholder="Adress" type="text" id="address" />
        <Input
          label="Town / City"
          placeholder="Town or city"
          type="text"
          id="townorcity"
        />
      </Row>
      <Row>
        <BasicSelect />
        <Input
          label="ZIP/Postal code"
          placeholder="Postal code or ZIP"
          type="text"
          id="ZIP"
        />
      </Row>
    </div>
  );
};
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 1rem;
  margin: 1rem 0rem;
`;
export default Form;
