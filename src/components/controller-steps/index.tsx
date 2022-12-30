import { useFormContext } from "@/context/form-context";
import { Step } from "@/types/step";
import * as S from "./style";

interface Props {
  numberOfSteps: number;
  steps: Step[];
}

export default function ControllerSteps({ steps }: Props) {
  const { currentStep } = useFormContext();

  return (
    <S.Container>
      {steps.map((step, index) => (
        <S.WrapperStepContent key={step.id}>
          <S.StepIndicatorButton isActiveStep={step.id === currentStep}>
            {index + 1}
          </S.StepIndicatorButton>
          <S.ContentText>
            <S.StepCounterNameText>step {index}</S.StepCounterNameText>
            <S.StepDescription>{step.title}</S.StepDescription>
          </S.ContentText>
        </S.WrapperStepContent>
      ))}
    </S.Container>
  );
}
