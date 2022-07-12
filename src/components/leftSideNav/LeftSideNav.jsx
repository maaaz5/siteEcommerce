import React from "react";
import styled from "styled-components";
import Buttonoutlined from "../buttons/Buttonoutlined";
import List from "./../List/List";
const LeftSideNav = (props) => {
  return (
    <Side>
      <List title={props.title} links={props.links} underlined />
      <Buttonoutlined title="More categories" right filled="light" />
    </Side>
  );
};
const Side = styled.div`
  width: 25%;
`;

export default LeftSideNav;
