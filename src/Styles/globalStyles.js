import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 1300px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  font-size: var(--S3);
  font-weight: bold;
`;
