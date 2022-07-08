import React from "react";
import styled from "styled-components";

const Buttonoutlined = (props) => {
  return (
    <ButtonOutline
      filled={props.filled}
      href={props.url}
      fontSize={props.fontSize}
      border={props.border}
    >
      <LeftArr left={props.left}>&#60;</LeftArr>
      {props.title}
      <RightArr right={props.right}>&#62;</RightArr>
    </ButtonOutline>
  );
};

const ButtonOutline = styled.a`
  display: inline-block;
  font-size: ${(props) => props.fontSize};
  background: ${(props) =>
    props.filled == "light"
      ? "var(--blackH)"
      : props.filled
      ? "var(--greenB)"
      : "transparent"};
  color: ${(props) =>
    props.filled == "light"
      ? "var(--blackA)"
      : props.filled
      ? "var(--blackJ)"
      : "var(--blackA)"};

  border-radius: 1.2rem;
  border: ${(props) => (props.border ? "0.3rem solid var(--greenB)" : "")};
  text-decoration: none;
  padding: 1rem 2rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  position: relative;
  resize: none;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateX(0.4rem);
  }
`;

const LeftArr = styled.span`
  display: ${(props) => (props.left ? "default" : "none")};
  margin-right: 1rem;
`;
const RightArr = styled.span`
  display: ${(props) => (props.right ? "default" : "none")};
  margin-left: 1rem;
`;
export default Buttonoutlined;
