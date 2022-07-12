import React, { useState } from "react";
import styled from "styled-components";
// import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

import { SubTitle, Input } from "../../Styles/styles/globalStyles";

import categories from "../../data/categories";
import brands from "../../data/brands";

import Rating from "../Rating/Rating";
import Buttonoutlined from "../buttons/Buttonoutlined";

const Filter = () => {
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState([20, 37]);

  const handleChange = (e, newValue) => {
    setPrice(newValue);
  };
  return (
    <FilterWrapper>
      <Categories>
        <SubTitle medium>Categories</SubTitle>
        <CategoriesList>
          {categories.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
                <div>{item.count}</div>
              </div>
            );
          })}
        </CategoriesList>
      </Categories>
      <Brands>
        <SubTitle medium>Brands</SubTitle>
        <BrandsList>
          {brands.map((item, index) => {
            return (
              <div key={index}>
                <Input type="checkbox" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </BrandsList>
      </Brands>
      <RatingC>
        <SubTitle medium>Rating</SubTitle>
        <RatingList>
          {[5, 4, 3, 2, 1].map((item, index) => {
            return (
              <div key={index}>
                <Input type="checkbox" />
                <Rating count={item} />
              </div>
            );
          })}
        </RatingList>
      </RatingC>
      <Price>
        <SubTitle medium>Price</SubTitle>
        <Slider
          color="success"
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Price>
      <Buttons>
        <Buttonoutlined title="Apply" filled border />
        <Buttonoutlined title="Reset" />
      </Buttons>
    </FilterWrapper>
  );
};

const Buttons = styled.div`
  margin: 4rem 2rem;
`;

const FilterWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Categories = styled.div`
  margin-top: 4rem;
`;
const Brands = styled.div`
  margin-top: 4rem;
`;

const RatingC = styled.div`
  margin-top: 4rem;

  .rating {
    margin-top: 1rem;
  }
`;
const Price = styled.div`
  margin-top: 4rem;
`;

const CategoriesList = styled.div`
  margin-top: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin-top: 0.6rem;
      font-size: var(--S6);
    }
    div {
      background-color: var(--greenD);
      padding: 3px;
      color: var(--greenB);
      border-radius: 8px;
    }
  }
`;
const BrandsList = styled.div`
  margin-top: 2rem;

  div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    p {
      margin: 0 2rem;
      font-size: var(--S6);
    }
  }
`;

const RatingList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  div {
    display: flex;
    margin: 0.2rem 1rem;
  }
`;

export default Filter;
