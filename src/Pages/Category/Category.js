import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Box from "../../components/Box/Box.jsx";
import Filter from "../../components/Filter/Filter";

import { Title, Wrapper } from "../../Styles/styles/globalStyles";

const Category = () => {
  const { currentCategory } = useSelector((state) => state.products);
  return (
    <Wrapper>
      <CategoryContainer>
        <CategoryHeader>
          <Title>{currentCategory}</Title>
          <FilterControllers></FilterControllers>
        </CategoryHeader>
        <CategoryProductsAndFilter>
          <CategoryProducts></CategoryProducts>
          <Filter />
        </CategoryProductsAndFilter>
      </CategoryContainer>
    </Wrapper>
  );
};

const CategoryProducts = styled.div``;

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
