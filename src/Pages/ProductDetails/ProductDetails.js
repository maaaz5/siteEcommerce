import React from "react";
import styled from "styled-components";

import { Wrapper, Title } from "../../Styles/styles/globalStyles";

const ProductDetails = () => {
  return (
    <Wrapper>
      <ProductDetailsContainer>
        <GalleryLeft>{/* Here goes the images */}</GalleryLeft>
        <DetailsRight>
          {/* Here goes the details */}
          <Title>Carrots from Tomissy Farm</Title>
        </DetailsRight>
      </ProductDetailsContainer>
    </Wrapper>
  );
};

const ProductDetailsContainer = styled.section`
  display: flex;
`;

const GalleryLeft = styled.div``;

const DetailsRight = styled.div``;

export default ProductDetails;
