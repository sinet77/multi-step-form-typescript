import { createContext, useContext, useState, ReactNode } from "react";
import { Mode, StepType } from "../App";
import { avaiablePlans } from "../plans";

type AppContextType = {
  step: StepType;
  setStep: (step: StepType) => void;
  selectedMode: Mode;
  setSelectedMode: (mode: Mode) => void;
  selectedPlanId: string | undefined;
  setSelectedPlanId: (id: string) => void;
  selectedAddOnsId: string[];
  setSelectedAddOnsId: (addOns: string[]) => void;
  getPriceFromThePlan: () => string | undefined;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<StepType>("PersonalInfo");
  const [selectedMode, setSelectedMode] = useState<Mode>("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();
  const [selectedAddOnsId, setSelectedAddOnsId] = useState<string[]>([]);

  const getPriceFromThePlan = (): string | undefined => {
    const selectedPlan = avaiablePlans.find(
      (plan) => plan.id === selectedPlanId
    );
    if (!selectedPlan) return;

    return selectedMode === "monthly"
      ? `$${selectedPlan.price.monthly}/mo`
      : `$${selectedPlan.price.yearly}/yr`;
  };

  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        selectedMode,
        setSelectedMode,
        selectedPlanId,
        setSelectedPlanId,
        selectedAddOnsId,
        setSelectedAddOnsId,
        getPriceFromThePlan,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }

  return context;
};
