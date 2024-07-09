import styled from "styled-components";

export const ProductsWrapper = styled.section`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 2rem;

  & > article {
    flex: 1 300px;
  }
`;
