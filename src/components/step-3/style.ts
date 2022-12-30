import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: var(--alabaster);
  border-radius: 0.5rem;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    padding: 1.5rem 0;
    justify-content: space-between;
    height: 100%;
  }
`;

export const AddOnsWrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
`;

export const LabelAddOnContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  border: solid 1px var(----purplish-blue);
  transition: background-color 150ms ease;
  cursor: pointer;

  &:hover,
  &:has(input[type="checkbox"]:checked) {
    background-color: var(--magnolia);
  }
`;

export const Checkbox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  position: relative;
  accent-color: var(--purplish-blue);
  width: 18px;
  height: 18px;
  border-radius: 8px;

  &::after {
    content: "";
    position: absolute;
    display: block;
    border-color: var(--light-gray);
  }
`;

export const ContentTextContainer = styled.div`
  flex: 1;

  h2 {
    color: var(--marine-blue);
    font-weight: 500;
    font-size: 1.125rem;
  }

  p {
    color: var(--cool-gray);
    font-size: 0.875rem;
  }

  h2,
  p {
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const AmountText = styled.p`
  color: var(--purplish-blue);
  font-size: 0.875rem;
`;
