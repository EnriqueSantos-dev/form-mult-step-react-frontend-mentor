import styled, { css } from "styled-components";

interface ButtonProps {
  bg: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
}

export const Container = styled.button<ButtonProps>`
  padding: 0.5rem 1.25rem;
  background-color: ${({ bg }) => bg};
  transition: all 100ms ease;
  border-radius: 0.375rem;
  color: ${({ textColor }) => textColor ?? "var(--white)"};
  font-weight: bold;

  &:hover {
    color: ${({ textHover }) => textHover ?? ""};

    ${(props) => {
      if (props.bgHover) {
        return css`
          background-color: ${props.bgHover};
        `;
      }

      return css`
        filter: brightness(90%);
      `;
    }}
  }
`;
