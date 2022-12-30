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

export const RadiosGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 3rem 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ControllerTypePlan = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.125rem;
  background-color: var(--magnolia);
  border-radius: 8px;
  gap: 1rem;
  margin-bottom: 80px;

  p {
    text-transform: capitalize;
    color: var(--cool-gray);
    font-weight: 500;
  }

  &:has(input:checked) p:last-child {
    color: var(--marine-blue);
  }

  &:has(input:checked) div::after {
    left: 50%;
  }
`;

export const Checkbox = styled.div`
  border-radius: 20px;
  position: relative;
  background-color: var(--marine-blue);
  width: 50px;
  height: 25px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-inline: 5px;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--white);
    transition: all 100ms ease;
  }
`;
