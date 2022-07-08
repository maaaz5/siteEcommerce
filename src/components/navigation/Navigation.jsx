import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { InnerWrapper } from "../../Styles/styles/globalStyles";

const Navigation = (props) => {
  const navLinks = [
    "Bakery",
    "Fruit and vegetables",
    "Meat and fish",
    "Drinks",
    "Kitchen",
    "Special nutrition",
    "Baby",
    "Pharmacy",
  ];
  return (
    <NavWrapper dark={props.dark}>
      <InnerWrapper>
        <Nav dark={props.dark}>
          {navLinks.map((item) => (
            <li>
              <a href="#">{item}</a>
              <MdKeyboardArrowDown />
            </li>
          ))}
        </Nav>
      </InnerWrapper>
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  background-color: ${(props) =>
    props.dark ? "var(--blackA)" : "var(--blackH)"};
  margin-top: 3rem;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  li {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    a {
      color: ${(props) => (props.dark ? "var(--blackJ)" : "var(--blackA)")};
      font-weight: 500;
    }
    svg {
      color: ${(props) => (props.dark ? "var(--blackJ)" : "var(--blackA)")};
    }
  }
  li + li {
    margin-left: 4rem;
  }
`;
export default Navigation;
