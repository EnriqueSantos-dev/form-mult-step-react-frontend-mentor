import * as S from "./style";

interface Props {
  title: string;
  subTitle: string;
}

export default function DescriptionStep({ title, subTitle }: Props) {
  return (
    <S.Container>
      <S.Tittle>{title}</S.Tittle>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
}
