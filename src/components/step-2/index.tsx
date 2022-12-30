import * as S from "./style";
import React, { useMemo, useState } from "react";

import CardPlan from "../card-plan";
import DescriptionStep from "../description-step";
import formSteps from "@/data/form-steps-data";
import { ContainerButtonsGroup } from "@/components/layout/container-button-submit-form/style";
import Button from "../button";
import { useFormContext } from "@/context/form-context";
import steps from "@/data/form-control-steps-data";

const { step2 } = formSteps;

const DEFAULT_PLAN_ACTIVE_ID = 1;

export default function Step2() {
  const { addData, data, increaseCurrentStep, decreaseCurrentStep } =
    useFormContext(steps.length);

  const [typePlanActive, setTypePlanActive] = useState<"monthly" | "yearly">(
    data?.currentTypePlan ?? "monthly"
  );
  const [planActive, setPlanActive] = useState(
    data?.plan?.id ?? DEFAULT_PLAN_ACTIVE_ID
  );

  function handleSelectPlanActive(id: number) {
    setPlanActive(id);
  }

  function changeTypePlanActive() {
    setTypePlanActive((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  }

  const cardInfo = useMemo(
    () => step2[typePlanActive].find((card) => card.id === planActive),
    [planActive, typePlanActive]
  );

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    addData({
      ...data,
      currentTypePlan: typePlanActive,
      plan: cardInfo,
    });

    increaseCurrentStep();
  }

  return (
    <S.Container onSubmit={onSubmit}>
      <div>
        <DescriptionStep title={step2.title} subTitle={step2.subTittle} />
        <S.RadiosGroup>
          {step2[typePlanActive].map((card) => (
            <CardPlan
              key={card.id}
              id={String(card.id)}
              title={card.title}
              isChecked={planActive === card.id}
              name="plan"
              price={card.price}
              unitPaidPrice={card.typePrice as "monthly" | "yearly"}
              iconUrl={card.icon}
              subTittle={card.subTitle}
              onChange={() => handleSelectPlanActive(card.id)}
            />
          ))}
        </S.RadiosGroup>

        <S.ControllerTypePlan>
          <p>monthlyly</p>
          <label>
            <S.Checkbox />
            <input
              type="checkbox"
              name=""
              id=""
              value={typePlanActive}
              checked={typePlanActive === "yearly"}
              onChange={changeTypePlanActive}
              hidden
            />
          </label>
          <p>Yearly</p>
        </S.ControllerTypePlan>
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
