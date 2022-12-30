import React, { createContext, useContext, useState } from "react";
import { AddOn, Plan } from "@/types";

interface Data {
  name: string;
  phone: string;
  email: string;
  currentTypePlan: "monthly" | "yearly";
  plan: Plan;
  addOns: AddOn[];
}

export interface FormContextData {
  data: Data;
  currentStep: number;
  addData: (data: Data) => void;
  increaseCurrentStep: () => void;
  decreaseCurrentStep: () => void;
  addTotalSteps: (stepsCount: number) => void;
  skipToStep: (step: number) => void;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Data>({} as Data);
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(currentStep);

  function addData(data: Data) {
    setData((prev) => ({ ...prev, ...data }));
  }

  function increaseCurrentStep() {
    setCurrentStep((prev) => (prev === totalSteps ? currentStep : prev + 1));
  }

  function decreaseCurrentStep() {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function addTotalSteps(steps: number) {
    setTotalSteps(steps);
  }

  const skipToStep = (step: number) => {
    if (step > totalSteps || step < 0) return;

    setCurrentStep(step);
  };

  return (
    <FormContext.Provider
      value={{
        data,
        addData,
        currentStep,
        increaseCurrentStep,
        decreaseCurrentStep,
        addTotalSteps,
        skipToStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (stepsNumber: number = 1) => {
  const context = useContext(FormContext);

  return context;
};
