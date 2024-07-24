import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/steps/PersonalInfo";
import { StepBar } from "./components/StepBar";
import SelectYourPlan from "./components/steps/SelectYourPlan";
import { PickAddOns } from "./components/steps/PickAddOns";

export type StepType =
  | "PersonalInfo"
  | "Plan"
  | "Addons"
  | "Summary"
  | "Finish";

function App() {
  const [step, setStep] = useState<StepType>("PersonalInfo");
  const [selectedMode, setSelectedMode] = useState<string>("monthly");

  const onStepChange = (step: StepType) => {
    setStep(step);
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
          />
        )}
        {step === "Addons" && (
          <PickAddOns
            goToPreviousStep={onStepChange}
            goToNextStep={onStepChange}
            chosenMode={selectedMode}
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
