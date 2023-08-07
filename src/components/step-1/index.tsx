import * as S from "./style";
import * as Y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DescriptionStep from "../description-step";
import formStepsData from "@/data/form-steps-data";
import Input from "../input";
import { ContainerButtonsGroup } from "@/components/layout/container-button-submit-form/style";
import Button from "../button";
import { useFormContext } from "@/context/form-context";

const { step1 } = formStepsData;

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const schema = Y.object().shape({
  name: Y.string().required(),
  email: Y.string().required().email(),
  phone: Y.string()
    .transform((value) => value?.replace(/\D/g, "") ?? "")
    .test((value) => {
      return new RegExp(/^\d{11}$/).test(value ?? "");
    })
    .required(),
});

export default function Step1() {
  const { increaseCurrentStep, addData, data } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: data.name ?? "",
      phone: data.phone ?? "",
      email: data.email ?? "",
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(dataForm: FormData) {
    addData({
      ...data,
      name: dataForm.name,
      email: dataForm.email,
      phone: dataForm.phone,
    });
    increaseCurrentStep();
  }

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <DescriptionStep title={step1.title} subTitle={step1.subTitle} />

        <S.InputsGroup>
          <S.Label>
            <S.LabelTextGroup>
              <p>Name</p>
              <p>{errors?.name?.message}</p>
            </S.LabelTextGroup>
            <Input
              placeholder={step1.inputsPlaceholders.name}
              {...register("name")}
            />
          </S.Label>
          <S.Label>
            <S.LabelTextGroup>
              <p> Email Address</p>
              <p>{errors?.email?.message}</p>
            </S.LabelTextGroup>
            <Input
              placeholder={step1.inputsPlaceholders.email}
              {...register("email")}
            />
          </S.Label>
          <S.Label>
            <S.LabelTextGroup>
              <p>Phone</p>
              <p>{errors?.phone?.message}</p>
            </S.LabelTextGroup>
            <Input
              type="tel"
              placeholder={step1.inputsPlaceholders.phone}
              {...register("phone")}
            />
          </S.Label>
        </S.InputsGroup>
      </div>
      <ContainerButtonsGroup justify="flex-end">
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
