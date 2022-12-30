import { Suspense, useEffect, useMemo } from "react";
import styled from "styled-components";
import ControllerSteps from "./components/controller-steps";
import { useFormContext } from "./context/form-context";
import controlStepData from "./data/form-control-steps-data";
import { lazy } from "react";
import Loading from "./components/loading-step";
import steps from "./data/form-control-steps-data";

const Step1 = lazy(async () => await import("@/components/step-1"));
const Step2 = lazy(async () => await import("@/components/step-2"));
const Step3 = lazy(async () => await import("@/components/step-3"));
const Step4 = lazy(async () => await import("@/components/step-4"));

const Main = styled.main`
  display: grid;
  gap: 1.5rem;
  height: 100vh;
  background-color: var(--magnolia);

  @media (min-width: 1024px) {
    padding: 0;
    place-items: center;
  }
`;

const Container = styled.div`
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    max-width: 60vw;
    min-height: 70vh;
    padding: 24px;
    background-color: var(--alabaster);
    gap: 5rem;

    padding-inline: 1.5rem 5rem;
  }
`;

const RightSide = styled.div`
  position: relative;
  top: -3.125rem;
  flex: 1;
  padding-inline: 1rem;

  @media (min-width: 1024px) {
    top: 0;
    padding-inline: 0;
  }
`;

export default function App() {
  const { currentStep, addTotalSteps } = useFormContext();

  const CurrentStepShow = useMemo(() => {
    if (currentStep === 1) return Step1;
    if (currentStep === 2) return Step2;
    if (currentStep === 3) return Step3;
    if (currentStep === 4) return Step4;

    return Step1;
  }, [currentStep]);

  useEffect(() => {
    addTotalSteps(steps.length);
  }, []);

  return (
    <Main>
      <Container>
        <ControllerSteps
          numberOfSteps={controlStepData.length}
          steps={controlStepData}
        />
        <RightSide>
          <Suspense fallback={<Loading />}>
            <CurrentStepShow />
          </Suspense>
        </RightSide>
      </Container>
    </Main>
  );
}
