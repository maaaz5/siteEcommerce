import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "../../Styles/styles/globalStyles";

const Miniheader = () => {
  return (
    <InnerWrapper>
      <Header>
        <div>
          <p>Chat with us</p>
          <p>+420 336 775 664</p>
          <p>exemple@exemple.com</p>
        </div>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </Header>
    </InnerWrapper>
  );
};
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: var(--S6);
  color: var(--blackA);
  border-bottom: 1px solid var(--blackE);
  div {
    padding: 1rem 0rem;
    display: flex;
    p {
      cursor: pointer;
    }
    p:first-child {
      color: var(--greenB);
    }

    p + p {
      margin-left: 2rem;
    }
  }

  ul {
    display: flex;
    a {
      color: var(--greenB);
    }
    li + li {
      margin-left: 2rem;
    }
  }
`;
export default Miniheader;
