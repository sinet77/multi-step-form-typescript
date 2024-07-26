import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/steps/YOURINFO/PersonalInfo";
import { StepBar } from "./components/StepBar";
import SelectYourPlan from "./components/steps/SELECTPLAN/SelectYourPlan";
import { PickAddOns } from "./components/steps/ADDONS/PickAddOns";

export type StepType =
  | "PersonalInfo"
  | "Plan"
  | "Addons"
  | "Summary"
  | "Finish";

export type Mode = "monthly" | "yearly";

function App() {
  const [step, setStep] = useState<StepType>("PersonalInfo");
  const [selectedMode, setSelectedMode] = useState<Mode>("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();
  const [selectedAddOnsId, setSelectedAddOnsId] = useState<string[]>([]);

  const onStepChange = (step: StepType) => {
    setStep(step);
  };

  const onPlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
  };

  return (
    <div className="background">
      <div className="white-board">
        <StepBar currentStep={step} />
        {step === "PersonalInfo" && (
          <PersonalInfo goToNextStep={onStepChange} />
        )}
        {step === "Plan" && (
          <SelectYourPlan
            goToPreviousStep={onStepChange}
            goToNextStep={onStepChange}
            selectMode={setSelectedMode}
            selectedMode={selectedMode}
            currentPlanId={selectedPlanId}
            onPlanSelect={onPlanSelect}
          />
        )}
        {step === "Addons" && (
          <PickAddOns
            goToPreviousStep={onStepChange}
            goToNextStep={onStepChange}
            chosenMode={selectedMode}
            selectedAddOnsId={selectedAddOnsId}
            setSelectedAddOnsId={setSelectedAddOnsId}
          />
        )}
        {/* {step === "Summary" && (
          <Summary
            goToPreviousStep={onStepChange}
            goToNextStep={onStepChange}
          />
        )}
        {step === "EndScreen" && <EndScreen />} */}
      </div>
    </div>
  );
}

export default App;
