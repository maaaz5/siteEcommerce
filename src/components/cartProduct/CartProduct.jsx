import React, { useState } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CloseIcon from "@mui/icons-material/Close";

const CartProduct = (props) => {
  const [quantiy, setQuanity] = useState(1);
  const [total, setTotal] = useState(props.price * 1);
  let pr = props.price * 1;
  function add() {
    setQuanity((s) => {
      s = s + 1;

      setTotal(s * pr);
      return s;
    });
  }
  function remove() {
    setQuanity((s) => {
      if (s - 1 == 0) {
        s = 1;
      } else {
        s = s - 1;
      }

      setTotal(s * pr);
      return s;
    });
  }

  return (
    <ProcutWrapper>
      <LeftWrapper>
        <ImgWrapper>
          <img src={props.img} alt="" />
        </ImgWrapper>
        <div className="fonctionallities">
          <p>
            <FavoriteBorderIcon /> Wishlist
          </p>
          <p>
            <CompareArrowsIcon /> Compare
          </p>
          <p>
            <CloseIcon /> Remove
          </p>
        </div>
      </LeftWrapper>

      <ContentWrapper>
        <h3>Product Title</h3>
        <DetailWrapper>
          <Sec>Farm :</Sec>
          <h5>Tharamis Farm</h5>
        </DetailWrapper>
        <DetailWrapper>
          <Sec>Freshness :</Sec>
          <h5>1 day old</h5>
        </DetailWrapper>

        <PriceAndController>
          <PriceWrapper>
            <p className="price">36.99 USD</p>
            <p className="firstprice">48.56 USD</p>
          </PriceWrapper>
          <Controllers>
            <button onClick={remove}>-</button>
            <input
              disabled
              type="number"
              min={1}
              id="quantity"
              value={quantiy}
            />
            <button onClick={add}>+</button>
          </Controllers>
        </PriceAndController>

        {/* <h4>{props.price} USD</h4>
        <p>{total}</p> */}
      </ContentWrapper>
    </ProcutWrapper>
  );
};
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  .fonctionallities {
    p {
      display: flex;
      align-items: center;
      gap: 0rem 0.4rem;
    }
  }
`;
const ProcutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0rem 2rem;
`;
const PriceWrapper = styled.div`
  font-weight: 600;
  .price {
    font-size: var(--S4);
    color: var(--greenB);
  }
  .firstprice {
    font-size: var(--S6);
    color: var(--blackC);
    text-decoration: line-through;
  }
`;
const PriceAndController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
`;

const Sec = styled.h5`
  color: var(--blackC);
`;
const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h5 {
    font-size: var(--caption);
  }
`;

const Controllers = styled.div`
  input {
    max-width: 40px !important;
    padding: 0.3rem;
    margin: 0rem 0.3rem;
  }
  button {
    outline: none;
    border: 1px solid var(--blackC);
    padding: 0.3rem;
  }
`;
const ImgWrapper = styled.div`
  width: 100px;
  background-color: var(--blackH);
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem 0rem;

  h3 {
    font-size: var(--S5);
  }
`;
export default CartProduct;
