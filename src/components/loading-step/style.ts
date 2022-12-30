import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform:rotate(360deg);
  }
`;

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  place-items: center;
  place-content: center;

  p {
    font-weight: 500;
    color: var(--marine-blue);
    text-transform: capitalize;
  }

  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 1px var(--purplish-blue);
    border-right: transparent;
    border-top: transparent;
    animation: ${spin} 0.5s infinite ease;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;
