import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 0.25rem;
  }
`;

export const Tittle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: var(--marine-blue);
  text-transform: capitalize;
`;

export const SubTitle = styled.p`
  color: var(--cool-gray);
  font-size: 1rem;

  &::first-letter {
    text-transform: capitalize;
  }

  @media (min-width: 1024px) {
    font-size: 0.875rem;
  }
`;
