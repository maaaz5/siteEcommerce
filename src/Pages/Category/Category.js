import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Box from "../../components/Box/Box.jsx";
import Filter from "../../components/Filter/Filter";
import Product from "../../components/product/Product.jsx";
import ThreeProducstRow from "../../components/product/ThreeProducstRow.jsx";

import { Title, Wrapper } from "../../Styles/styles/globalStyles";

const Category = () => {
  const { currentCategory, products } = useSelector((state) => state.products);

  console.log(products);
  return (
    <Wrapper>
      <CategoryContainer>
        <CategoryHeader>
          <Title>{currentCategory}</Title>
          <FilterControllers></FilterControllers>
        </CategoryHeader>
        <CategoryProductsAndFilter>
          <Filter />
          <CategoryProducts>
            {/* <ThreeProducstRow products={products} num={4} /> */}
            {/* Here goes the products */}
          </CategoryProducts>
        </CategoryProductsAndFilter>
      </CategoryContainer>
    </Wrapper>
  );
};

const CategoryProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryProductsAndFilter = styled.div`
  display: flex;
  margin: 3rem 0;
`;

const CategoryContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const FilterControllers = styled.div`
  display: flex;
`;

const CategoryHeader = styled.div`
  padding: 2rem;
`;

export default Category;
