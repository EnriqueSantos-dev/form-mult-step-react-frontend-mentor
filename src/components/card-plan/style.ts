import styled from "styled-components";

export const Container = styled.label`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  align-items: start;
  border: solid 1px var(--light-gray);
  padding: 1rem;
  border-radius: 0.5rem;
  transition: border-color 150ms ease;
  cursor: pointer;

  &:hover {
    border-color: var(--purplish-blue);
    background-color: var(--magnolia);
  }

  &:has(input:checked) {
    border-color: var(--purplish-blue);
    background-color: var(--magnolia);
  }

  @media (min-width: 600px) {
    flex-direction: column;
    gap: 48px;
  }
`;

export const WrapperRightSide = styled.div``;

export const Input = styled.input.attrs((props) => ({
  type: props.type ?? "radio",
}))``;

export const Icon = styled.img``;

export const Tittle = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  color: var(--marine-blue);
`;

export const PriceText = styled.p`
  font-size: 0.875rem;
  color: var(--cool-gray);
`;

export const SubTittle = styled.p`
  color: var(--marine-blue);
  font-size: 0.75rem;
  font-weight: 500;
`;
