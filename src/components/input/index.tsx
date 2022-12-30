import React, { forwardRef } from "react";
import * as S from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, ...rest }, ref) => {
    return <S.Container hasError={hasError} {...rest} ref={ref} />;
  }
);

export default Input;
