import * as S from "./style";
import DescriptionStep from "../description-step";
import { useFormContext } from "@/context/form-context";
import formStepsData from "@/data/form-steps-data";
import { formatPrice } from "@/utils/format-price";
import { ContainerButtonsGroup } from "../layout/container-button-submit-form/style";
import Button from "../button";
import { useState } from "react";
import SuccessStep from "../success-step";

const { step4 } = formStepsData;

export default function Step4() {
  const { data, skipToStep, decreaseCurrentStep } = useFormContext();
  const [finishFormSteps, setFinishFormSteps] = useState(false);

  const typePlanPriceFormatted =
    data.currentTypePlan === "monthly" ? "/mo" : "/yr";

  const totalAmount = () => {
    const totalAddOns = data.addOns.reduce(
      (acc, addOn) => (acc += addOn.price),
      0
    );

    const total = data.plan.price + totalAddOns;

    return total;
  };

  const onSubmit = () => {
    setFinishFormSteps(true);
  };

  if (finishFormSteps) {
    return <SuccessStep />;
  }

  return (
    <S.Container onSubmit={onSubmit}>
      <S.WrapperContent>
        <DescriptionStep title={step4.title} subTitle={step4.subTitle} />

        <S.BoxCoverSummary>
          <S.TopContentContainer>
            <S.TopContentContainerLeftSide>
              <h2>
                {data.plan.title} ({data.currentTypePlan})
              </h2>
              <button onClick={() => skipToStep(2)}>Change</button>
            </S.TopContentContainerLeftSide>
            <S.TopContentContainerRightSide>
              {formatPrice(data.plan.price)}
              {typePlanPriceFormatted}
            </S.TopContentContainerRightSide>
          </S.TopContentContainer>

          <S.BottomContainer>
            {data.addOns.map((addOn) => (
              <li key={addOn.id}>
                <p>{addOn.title}</p>
                <p>
                  +{formatPrice(addOn.price)}
                  {typePlanPriceFormatted}
                </p>
              </li>
            ))}
          </S.BottomContainer>
        </S.BoxCoverSummary>
        <S.TotalSummaryContent>
          <p>total (per {data.currentTypePlan})</p>
          <h3>
            +{formatPrice(totalAmount())}
            {typePlanPriceFormatted}
          </h3>
        </S.TotalSummaryContent>
      </S.WrapperContent>

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

        <Button type="submit" bg="hsl(243, 100%, 62%)">
          Confirm
        </Button>
      </ContainerButtonsGroup>
    </S.Container>
  );
}
