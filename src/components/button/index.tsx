import React from "react";
import * as S from "./style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  children: React.ReactNode;
}

export default function Button({
  bg,
  bgHover,
  textColor,
  children,
  ...rest
}: Props) {
  return (
    <S.Container bg={bg} bgHover={bgHover} textColor={textColor} {...rest}>
      {children}
    </S.Container>
  );
}
