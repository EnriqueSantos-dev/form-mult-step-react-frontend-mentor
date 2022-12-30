import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--alabaster);
  padding: 6.25rem 1.5rem;
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    background-color: "";
    padding: 0;
    border-radius: 0;
  }
`;

export const Icon = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const Title = styled.h1`
  color: var(--marine-blue);
  font-weight: bold;
  font-size: 1.5rem;
  margin-block: 1rem;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Description = styled.p`
  color: var(--cool-gray);
  text-align: center;

  @media (min-width: 1024px) {
    max-width: 80%;
  }
`;
