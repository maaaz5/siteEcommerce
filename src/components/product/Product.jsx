import React from "react";
import styled from "styled-components";
import Buttonoutlined from "../buttons/Buttonoutlined";

const Product = (props) => {
  function fn(text, count) {
    return (
      text.slice(0, count) +
      (text[count] == " " ? "" : text.length > count ? "..." : "")
    );
  }
  return (
    <Card>
      <Imgwrapper>
        <img src={props.img} alt="" />
      </Imgwrapper>
      <h3>{fn(props.title, 19)}</h3>
      <h5>{fn(props.des, 34)}</h5>
      <CardFooter>
        <div className="prices">
          <p>{props.price} USD</p>
          <p>{props.priceSale}</p>
        </div>
        <Buttonoutlined
          title="Buy now"
          url="#"
          fontSize="var(--btnFontSize)"
          filled
          border
        />
      </CardFooter>
    </Card>
  );
};

const Card = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: 2px solid var(--blackF);
  outline-offset: 1px;
  border-radius: 1rem;
  width: 33%;

  h3 {
    font-size: var(--S5);
    font-weight: 500;
    color: var(--blackA);
    margin: 0.8rem 0rem;
  }
  h5 {
    font-size: var(--S6);
    font-weight: 400;
    color: var(--blackB);
    margin-bottom: 2rem;
  }
`;
const Imgwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  img {
    max-height: 200px;
    width: auto;
    aspect-ratio: normal;
  }
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .prices {
    p:first-child {
      font-size: var(--S4);
      font-weight: 600;
    }
  }
`;
export default Product;
