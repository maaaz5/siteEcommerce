import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../Styles/styles/globalStyles";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import Input from "./../../components/inputs/Input";
const Checkout = () => {
  return (
    <Wrapper>
      <h1>Checkout</h1>
      <Breadcrumb />
      <Input />
    </Wrapper>
  );
};

export default Checkout;
