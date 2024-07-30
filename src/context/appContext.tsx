import { createContext, useContext, useState, ReactNode } from "react";
import { Mode, StepType } from "../App";
import { avaiableAddons, avaiablePlans } from "../plans";

type AppContextType = {
  step: StepType;
  onStepChange: (step: StepType) => void;
  selectedMode: Mode;
  setSelectedMode: (mode: Mode) => void;
  selectedPlanId: string | undefined;
  setSelectedPlanId: (id: string) => void;
  selectedAddOnsId: string[];
  setSelectedAddOnsId: (addOns: string[]) => void;
  getPriceFromThePlan: () => string | undefined;
  getTotalPrice: () => number | undefined;
  personalInfo: { name: string; email: string; phoneNumber: string };
  setPersonalInfo: (info: {
    name: string;
    email: string;
    phoneNumber: string;
  }) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<StepType>("PersonalInfo");
  const [selectedMode, setSelectedMode] = useState<Mode>("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();
  const [selectedAddOnsId, setSelectedAddOnsId] = useState<string[]>([]);

  const [personalInfo, setPersonalInfo] = useState<{
    name: string;
    email: string;
    phoneNumber: string;
  }>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const onStepChange = (newStep: StepType) => {
    setStep(newStep);
  };

  const getPriceFromThePlan = (): string | undefined => {
    const selectedPlan = avaiablePlans.find(
      (plan) => plan.id === selectedPlanId
    );
    if (!selectedPlan) return;

    return selectedMode === "monthly"
      ? `$${selectedPlan.price.monthly}/mo`
      : `$${selectedPlan.price.yearly}/yr`;
  };

  const getTotalPrice = (): number | undefined => {
    const addonsTotalPrice = selectedAddOnsId.reduce((sum, addonId) => {
      const addon = avaiableAddons.find((addon) => addon.id === addonId);
      if (addon) {
        return sum + addon.price[selectedMode];
      }
      return sum;
    }, 0);

    const chosenPlan = avaiablePlans.find((plan) => plan.id === selectedPlanId);
    if (!chosenPlan) return;
    const planPrice = chosenPlan.price[selectedMode];

    return addonsTotalPrice + planPrice;
  };

  return (
    <AppContext.Provider
      value={{
        step,
        onStepChange,
        selectedMode,
        setSelectedMode,
        selectedPlanId,
        setSelectedPlanId,
        selectedAddOnsId,
        setSelectedAddOnsId,
        getPriceFromThePlan,
        getTotalPrice,
        personalInfo,
        setPersonalInfo,
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
