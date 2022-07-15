import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import CartProduct from "../cartProduct/CartProduct";
const Cart = () => {
  return (
    <CartWrapper className="cartt">
      <CartHeader>
        <h1>Shopping cart</h1>
        {/* <button className="closed">
          <CloseIcon />
        </button> */}
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
