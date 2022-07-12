import React from "react";
import styled from "styled-components";
import { tags } from "../../data/data";
const Tags = () => {
  return (
    <Section>
      <h1>Product Tags</h1>
      <Menu>
        {tags.map((l) => (
          <li>{l}</li>
        ))}
      </Menu>
    </Section>
  );
};
const Section = styled.ul`
  h1 {
    font-size: var(--S4);
    color: var(--blackA);
    margin-bottom: 2rem;
  }
`;
const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    font-size: var(--S6);
    color: var(--blackA);
    padding: 0.5rem 1rem;
    background-color: var(--blackF);
    border-radius: 1.5rem;
    font-weight: bold;
    margin: 1rem 2rem 0rem 0rem;
  }
`;
export default Tags;
