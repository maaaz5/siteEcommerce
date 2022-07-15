import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Wrapper } from "../../Styles/styles/globalStyles";
import TwoColumnBanner from "../../components/banner/TwoColumnBanner";

import LeftSideNav from "../../components/leftSideNav/LeftSideNav";
import TwoColDisplay from "../../components/twocoldisplay/TwoColDisplay";
import { menu1 } from "../../data/data";
import Product from "../../components/product/Product";
import ThreeProducstRow from "../../components/product/ThreeProducstRow";
import HeadlineSection from "../../components/headlineSection/HeadlineSection";
import Footer from "../../components/footer/Footer";
import Miniheader from "../../components/header/Miniheader";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Cart from "../../components/cart/Cart";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <Wrapper>
      <HomeContainer>
        <Miniheader />
        <Header />
        <Navigation />
        <TwoColDisplay
          left={<LeftSideNav links={menu1.links} title={menu1.hero} />}
          right={<TwoColumnBanner />}
        />
        <TwoColDisplay
          left={<LeftSideNav links={menu1.links} title={menu1.hero} />}
          right={<ThreeProducstRow products={products} num="3" />}
        />
        <TwoColDisplay
          left={<LeftSideNav links={menu1.links} title={menu1.hero} />}
          right={<ThreeProducstRow products={products.reverse()} num="3" />}
        />
        <HeadlineSection products={products} Headline="Out Latest" />
        <Footer />
      </HomeContainer>
    </Wrapper>
  );
};

const HomeContainer = styled.div``;

export default Home;
