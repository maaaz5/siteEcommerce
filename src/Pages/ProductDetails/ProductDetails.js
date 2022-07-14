import React from "react";
import styled from "styled-components";

import { Wrapper, Title } from "../../Styles/styles/globalStyles";

import Miniheader from "../../components/header/Miniheader";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer.jsx";



const ProductDetails = () => {
  return (
    <Wrapper>
      <Miniheader/>
      <Header/>
      <Navigation/>
      <ProductDetailsContainer>
        <GalleryLeft>{/* Here goes the images */}</GalleryLeft>
        <DetailsRight>
          {/* Here goes the details */}
          <Title>Carrots from Tomissy Farm</Title>
        </DetailsRight>
      </ProductDetailsContainer>
      <Footer/>
    </Wrapper>
  );
};

const ProductDetailsContainer = styled.section`
  display: flex;
`;

const GalleryLeft = styled.div``;

const DetailsRight = styled.div``;

export default ProductDetails;
