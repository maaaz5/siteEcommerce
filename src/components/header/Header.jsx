import React from "react";
import styled from "styled-components";
import logo from "./../../assests/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { InnerWrapper } from "../../Styles/styles/globalStyles";

const Header = () => {
  return (
    <InnerWrapper>
      <HeaderWrapper>
        <img src={logo} alt="logo" />
        <div>
          <span className="caregories">
            All categories <MdKeyboardArrowDown />
          </span>
          <input type="text" placeholder="Search Products, caregories ..." />
          <span>
            <VscSearch />
          </span>
        </div>

        <Icons>
          <AiOutlineUser />
          <AiOutlineShopping />
        </Icons>
      </HeaderWrapper>
    </InnerWrapper>
  );
};
const HeaderWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    gap: 0rem 0.9rem;
    font-size: var(--S5);
    font-weight: 700;
    cursor: pointer;
  }
  div {
    background-color: var(--blackF);
    display: flex;
    flex-direction: row;
    border-radius: 0.6rem;
    padding: 0.5rem 2rem;
    border: 1px solid var(--blackD);

    .caregories {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: -1rem;
        top: 0;
        height: 100%;
        width: 1%;
        background-color: var(--blackD);
      }
    }
    input {
      font-size: var(--S5);
      outline: none;
      border: none;
      background-color: var(--blackF);
      padding: 0rem 2rem;
    }
  }
`;
const Icons = styled.span`
  svg {
    font-size: var(--S4);
  }
`;
export default Header;
