import React from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import { Wrapper } from "../../Styles/styles/globalStyles";

const Category = () => {
  const { categoryName } = useParams();

  return (
    <Wrapper>
      <CategoryContainer>
        <h1>Category</h1>
      </CategoryContainer>
    </Wrapper>
  );
};

const CategoryContainer = styled.section``;

export default Category;
