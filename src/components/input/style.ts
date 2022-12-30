import styled from "styled-components";

interface ContainerProps {
  hasError?: boolean;
}

export const Container = styled.input<ContainerProps>`
  width: 100%;
  border: solid 1px
    ${({ hasError }) =>
      hasError ? "var(--strawberry-red)" : "var(--purplish-blue)"};
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  outline: 0;
  color: var(--marine-blue);
  font-weight: bold;

  &:hover,
  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? "var(--strawberry-red)" : "var(--purplish-blue)"};
  }

  &::placeholder {
    color: var(--cool-gray);
  }
`;
