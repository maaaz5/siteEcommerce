import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Box from "../../components/Box/Box.jsx";
import Filter from "../../components/Filter/Filter";
import Product from "../../components/product/Product.jsx";
import ThreeProducstRow from "../../components/product/ThreeProducstRow.jsx";
import Miniheader from "../../components/header/Miniheader";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer.jsx";
import { InnerWrapper, Title, Wrapper } from "../../Styles/styles/globalStyles";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";

const Category = () => {
  const { currentCategory, products } = useSelector((state) => state.products);

  console.log(products);
  return (
    <Wrapper>
      <Miniheader/>
      <Header/>
      <Navigation/>
      <InnerWrapper>
        <CategoryContainer>
          <Breadcrumb />
          <CategoryHeader>
            <Title>{currentCategory}</Title>
            <FilterControllers></FilterControllers>
          </CategoryHeader>
          <CategoryProductsAndFilter>
            <Filter />
            <CategoryProducts>
              <ThreeProducstRow products={products} num={3} width="100%" />
              <ThreeProducstRow products={products} num={3} width="100%" />
              <ThreeProducstRow products={products} num={3} width="100%" />
              {/* Here goes the products */}
            </CategoryProducts>
          </CategoryProductsAndFilter>
        </CategoryContainer>
      </InnerWrapper>
      <Footer/>
    </Wrapper>
  );
};

const CategoryProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0rem;
  width: 75%;
`;

const CategoryProductsAndFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3rem 0;
  div:first-child {
  }
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
