import React from "react";
import styled from "styled-components";
import Product from "./Product";
const ThreeProducstRow = (props) => {
  return (
    <Row width={props.width}>
      {props.products.map((s) =>
        s.id > props.num ? (
          ""
        ) : (
          <Product
            des={s.description}
            img={s.image}
            price={s.price}
            title={s.title}
          />
        )
      )}
    </Row>
  );
};
const Row = styled.div`
  width: ${(props) => (props.width ? props.width : "75%")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0 3rem;
`;

export default ThreeProducstRow;
