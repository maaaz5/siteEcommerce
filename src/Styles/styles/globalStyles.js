import styled from "styled-components";

export const InnerWrapper = styled.div`
  padding: 0 3rem;
  @media screen and (max-width: 1300px) {
    padding: 0 2rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--blackJ);

  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  font-size: var(--S3);
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: ${(props) => (props.medium ? "var(--S5)" : "var(--S6)")};
  font-weight: bold;
`;

export const Input = styled.input`
  accent-color: var(--greenB) !important;
`;
