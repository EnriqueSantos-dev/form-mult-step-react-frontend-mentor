import styled from "styled-components";

interface ContainerButtonGroupProps {
  justify?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-evenly"
    | "space-around";
}

export const ContainerButtonsGroup = styled.div<ContainerButtonGroupProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: var(--white);
  padding: 1.5rem;

  @media (min-width: 1024px) {
    position: relative;
    background-color: transparent;
    padding: 0;
  }
`;
