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

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-block: 2.5rem 6.25rem;
`;

export const LabelTextGroup = styled.div`
  display: flex;
  justify-content: space-between;
  text-overflow: ellipsis;
  overflow-x: hidden;

  p:first-child {
    color: var(--marine-blue);
  }

  p:last-child {
    font-weight: bold;
    color: var(--strawberry-red);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
