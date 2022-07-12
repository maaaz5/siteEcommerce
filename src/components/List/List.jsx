import React from "react";
import styled from "styled-components";

const List = (props) => {
  return (
    <Menu underlined={props.underlined}>
      <li className="Hero">{props.title}</li>
      {props.links.map((link) => (
        <li>
          <a href="#">{link}</a>
        </li>
      ))}
    </Menu>
  );
};
const Menu = styled.ul`
  margin-bottom: 3rem;
  .Hero {
    font-size: var(--S4);
    font-weight: 600;
    margin-bottom: 1rem;
  }
  li {
    margin: 0.5rem 0rem;
    a {
      font-size: var(--body);
      font-weight: normal;
      text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
      color: var(--greenB);
      &:hover {
        font-weight: bold;
      }
    }
  }
`;
export default List;
