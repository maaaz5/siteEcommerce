import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import CartProduct from "../cartProduct/CartProduct";
const Cart = (props) => {
  return (
    <CartWrapper isOpen={props.isOpen} className="cartt">
      <CartHeader>
        <h1>Shopping cart</h1>
        <CloseIcon />
      </CartHeader>
      <CartProduct />
      <CartProduct />
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  width: 400px;
  background-color: var(--blackJ);
  padding: 2rem;
  opacity: ${(props) => (props.isOpen == true ? "1 " : "0")};
  border: 2px solid var(--blackE);
  border-radius: 1rem;
  box-shadow: var(--shadow1);
`;

const CartHeader = styled.div`
  h1 {
    font-size: var(--S2);
  }
  color: var(--blackA);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;
export default Cart;
