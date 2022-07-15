import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "../../Styles/styles/globalStyles";
import List from "../List/List";
import { menus } from "../../data/data";
import Tags from "./Tags";
const Footer = () => {
  return (
    <Footers>
      <Lists>
        {menus.map((lis) => (
          <List title={lis.hero} links={lis.links} />
        ))}
      </Lists>
      <Tags />
    </Footers>
  );
};
const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0rem 1rem;
`;
const Footers = styled.footer`
  margin: 4rem 0rem;
`;
export default Footer;
