import {useState } from "react";
import { ProgressContext, ProgressSteps } from "./ProgressContext";

type Props = {
  children: React.ReactNode;
};

export const ProgressProvider = ({ children }: Props) => {
  const [currentStep, setCurrentStep] = useState(ProgressSteps.Start);
  const totalSteps = Object.keys(ProgressSteps).length / 2 - 1;
  const percentage = Math.floor((currentStep / totalSteps) * 100);

  return (
    <ProgressContext.Provider value={{ currentStep, setCurrentStep, percentage}}>
      {children}
    </ProgressContext.Provider>
  );
};
