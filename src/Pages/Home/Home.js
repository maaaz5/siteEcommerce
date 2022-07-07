import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Wrapper } from "../../Styles/globalStyles";

const Home = () => {
  const productsState = useSelector((state) => state.products);

  console.log(productsState);

  return (
    <Wrapper>
      <HomeContainer></HomeContainer>
    </Wrapper>
  );
};

const HomeContainer = styled.div``;

export default Home;
