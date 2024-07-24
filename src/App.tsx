import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/form/SignUpForm";
import { StepBar } from "./components/form/StepBar";

export type StepType =
  | "PersonalInfo"
  | "Plan"
  | "Addons"
  | "Summary"
  | "Finish";

function App() {
  const [step, setStep] = useState<StepType>("PersonalInfo");

  const onStepChange = (step: StepType) => {
    setStep(step);
  };

  return (
    <div className="background">
      <div className="white-board">
        <StepBar currentStep={step} />
        <SignUpForm />;
        {/* {step === "PersonalInfo" && (
          <PersonalInfo goToNextStep={onStepChange} />
        )}
        {step === "Plan" && (
          <SelectPlan
            goToPreviousStep={onStepChange}
            goToNextStep={onStepChange}
          />
        )}
        {step === "Addons" && (
          <PickAddOns
            goToPreviousStep={onStepChange}
            goToNextStep={onStepChange}
          />
        )}
        {step === "Summary" && (
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
