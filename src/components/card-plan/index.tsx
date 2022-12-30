import React, { InputHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  iconUrl: string;
  id: string;
  title: string;
  subTittle?: string | null;
  isChecked: boolean;
  name: string;
  price: number;
  unitPaidPrice: "monthly" | "yearly";
}

export default function CardPlan({
  iconUrl,
  id,
  name,
  price,
  title,
  subTittle,
  isChecked,
  unitPaidPrice,
  ...rest
}: Props) {
  const priceFormatted = new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

  const typePlanPriceFormatted = unitPaidPrice === "monthly" ? "/mo" : "/yr";

  return (
    <S.Container>
      <S.Input id={id} name={name} {...rest} checked={isChecked} hidden />
      <S.Icon src={iconUrl} alt="icon card" />

      <S.WrapperRightSide>
        <S.Tittle>{title}</S.Tittle>
        <S.PriceText>
          {priceFormatted}
          {typePlanPriceFormatted}
        </S.PriceText>
        {subTittle && <S.SubTittle>{subTittle}</S.SubTittle>}
      </S.WrapperRightSide>
    </S.Container>
  );
}
