import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Miniheader from "../../components/header/Miniheader";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import { Wrapper } from "../../Styles/styles/globalStyles";
import TwoColumnBanner from "../../components/banner/TwoColumnBanner";
const Home = () => {
  const productsState = useSelector((state) => state.products);
  console.log(productsState);
  return (
    <Wrapper>
      <HomeContainer>
        <Miniheader />
        <Header />
        <Navigation />
        <TwoColumnBanner />
      </HomeContainer>
    </Wrapper>
  );
};

const HomeContainer = styled.div``;

export default Home;
