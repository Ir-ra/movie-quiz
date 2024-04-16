import { createContext } from "react";

export enum ProgressSteps {
  Start,
  Choose,
  Search,
  Finish,
}

export const ProgressContext = createContext<{
  setCurrentStep: React.Dispatch<React.SetStateAction<ProgressSteps>>;
  currentStep: ProgressSteps;
  percentage: number
}>({
  currentStep: ProgressSteps.Start,
  setCurrentStep: () => {},
  percentage: 0
});