import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  background-image: url("/assets/images/bg-sidebar-mobile.svg");
  background-size: cover;
  background-position: bottom top;
  padding-block: 32px 100px;

  @media (min-width: 1024px) {
    background-image: url("/assets/images/bg-sidebar-desktop.svg");
    width: auto;
    padding-inline: 24px 80px;
    flex-direction: column;
    border-radius: 8px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const WrapperStepContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    margin-inline: 0 auto;
  }
`;

interface StepIndicatorButtonProps {
  isActiveStep: boolean;
}

export const StepIndicatorButton = styled.span<StepIndicatorButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-weight: 500;
  border-radius: 50%;
  border: 1px solid
    ${({ isActiveStep }) => (isActiveStep ? "transparent" : "var(--white)")};
  color: ${({ isActiveStep }) =>
    isActiveStep ? "var(--marine-blue)" : "var(--white)"};
  background-color: ${({ isActiveStep }) =>
    isActiveStep ? "var(--light-blue)" : "transparent"};
`;

export const ContentText = styled.div`
  text-transform: uppercase;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const StepCounterNameText = styled.p`
  text-transform: uppercase;
  font-size: 0.875rem;
  color: var(--light-gray);
`;

export const StepDescription = styled.h2`
  color: var(--white);
  font-weight: bold;
`;
