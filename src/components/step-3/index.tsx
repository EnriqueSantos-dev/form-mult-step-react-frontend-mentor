import DescriptionStep from "../description-step";
import * as S from "./style";

import formStepsData from "@/data/form-steps-data";
import { useFormContext } from "@/context/form-context";
import React, { useState } from "react";
import { ContainerButtonsGroup } from "../layout/container-button-submit-form/style";
import Button from "../button";
import { AddOn } from "@/types";

const { step3 } = formStepsData;

export default function Step3() {
  const { data, decreaseCurrentStep, addData, increaseCurrentStep } =
    useFormContext();
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

  const typePlanPriceFormatted =
    data.currentTypePlan === "monthly" ? "/mo" : "/yr";

  function formatPrice(value: number) {
    return new Intl.NumberFormat("es-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  }

  const handleChangeSelectedAddOns = (addOn: AddOn) => {
    setSelectedAddOns((prev) => {
      if (prev.findIndex((a) => a.id === addOn.id) > 0) return prev;

      return [...prev, addOn];
    });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addData({ ...data, addOns: selectedAddOns });

    increaseCurrentStep();
  };

  return (
    <S.Container onSubmit={onSubmit}>
      <div>
        <DescriptionStep title={step3.title} subTitle={step3.subTitle} />

        <S.AddOnsWrapperFlex>
          {step3.addOns[data.currentTypePlan].map((addOn) => (
            <S.LabelAddOnContainer key={addOn.id}>
              <S.Checkbox onChange={() => handleChangeSelectedAddOns(addOn)} />
              <S.ContentTextContainer>
                <h2>{addOn.title}</h2>
                <p>{addOn.description}</p>
              </S.ContentTextContainer>
              <S.AmountText>
                +{formatPrice(addOn.price)}
                {typePlanPriceFormatted}
              </S.AmountText>
            </S.LabelAddOnContainer>
          ))}
        </S.AddOnsWrapperFlex>
      </div>

      <ContainerButtonsGroup justify="space-between">
        <Button
          type="button"
          bg="hsl(231, 100%, 99%)"
          bgHover="hsl(217, 100%, 97%)"
          textColor="hsl(231, 11%, 63%)"
          onClick={decreaseCurrentStep}
        >
          Go Back
        </Button>

        <Button
          type="submit"
          bg="hsl(213, 96%, 18%)"
          textColor="hsl(229, 24%, 87%)"
        >
          Next Step
        </Button>
      </ContainerButtonsGroup>
    </S.Container>
  );
}
