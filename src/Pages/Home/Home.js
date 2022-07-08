import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Miniheader from "../../components/header/Miniheader";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import { Wrapper } from "../../Styles/styles/globalStyles";
import TwoColumnBanner from "../../components/banner/TwoColumnBanner";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  console.log(products);
  return (
    <Wrapper>
      <HomeContainer>
        <Miniheader />
        <Header />
        <Navigation />
        <TwoColumnBanner />
        <span>{products.map((item) => item.title)}</span>
      </HomeContainer>
    </Wrapper>
  );
};

const HomeContainer = styled.div``;

export default Home;
