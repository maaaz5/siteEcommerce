import React, { useState } from "react";
import styled from "styled-components";
import logo from "./../../assests/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { InnerWrapper } from "../../Styles/styles/globalStyles";

import { useSelector, useDispatch } from "react-redux";

import { setCurrentCategory } from "../../redux/actions/products";
import Cart from "../cart/Cart";

const Header = (props) => {
  const { categories } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(true);
  }
  function handleChange(category) {
    dispatch(setCurrentCategory(category));
  }

  return (
    <InnerWrapper>
      <HeaderWrapper>
        <img src={logo} alt="logo" />
        <div className="inputCategory">
          <select
            className="caregories"
            onChange={(e) => handleChange(categories[e.target.selectedIndex])}
          >
            {categories.map((c) => {
              return (
                <option key={c} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
          <input type="text" placeholder="Search Products, caregories ..." />
          <span>
            <VscSearch />
          </span>
        </div>

        <Icons>
          <AiOutlineUser />
          <div className={isOpen ? " cartnUser show" : "cartnUser hide"}>
            <AiOutlineShopping onClick={handleIsOpen} />
            <Cart isOpen={isOpen} />
          </div>
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

  select,
  option {
    background: transparent;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 0rem 0.9rem;
    font-size: var(--S5);
    font-weight: 700;
    cursor: pointer;
    outline: none;
    border: none;
    text-transform: capitalize;
  }
  .inputCategory {
    background-color: var(--blackF);
    display: flex;
    flex-direction: row;
    align-items: center;
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
  display: flex;
  svg {
    font-size: var(--S4);
  }
  .cartnUser {
    position: relative;
    /* .show {
      .cartt {
        opacity: 1 !important;
      }
    }
    .hide {
      .cartt {
        opacity: 0 !important;
      }
    } */
    .cartt {
      display: flex;
      flex-direction: column;

      z-index: 10;
    }
    .cartt {
      right: 0;
      position: absolute;
    }
  }
`;
export default Header;
