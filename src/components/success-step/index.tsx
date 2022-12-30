import * as S from "./style";
import formStepsData from "@/data/form-steps-data";

const { step5 } = formStepsData;

export default function SuccessStep() {
  return (
    <S.Container>
      <S.Icon src={step5.icon} alt="icon represent correct subscription" />
      <S.Title>{step5.title}</S.Title>
      <S.Description>{step5.description}</S.Description>
    </S.Container>
  );
}
