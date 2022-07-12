import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Wrapper } from "../../Styles/styles/globalStyles";
import TwoColumnBanner from "../../components/banner/TwoColumnBanner";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  console.log(products);
  return (
    <Wrapper>
      <HomeContainer>
        <TwoColumnBanner />
        <span>{products.map((item) => item.title)}</span>
      </HomeContainer>
    </Wrapper>
  );
};

const HomeContainer = styled.div``;

export default Home;
