import { createContext, useState } from "react";

export const ProgressContext = createContext<{
  progress: number; 
  setProgress: React.Dispatch<React.SetStateAction<number>> 
}>({
  progress: 0,
  setProgress: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const ProgressProvider = ({ children }: Props) => {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
