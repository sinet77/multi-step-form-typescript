import { StepType } from "../App";
import { Step } from "./OneStep/OneStep";

type CurrentStepType = {
  currentStep: StepType;
};

export const StepBar = ({ currentStep }: CurrentStepType) => {
  {
    /* TODO: zmienic na BOX z MUI */
  }
  return (
    <div className="step-container">
      <Step
        number={1}
        info="YOUR INFO"
        isSelected={currentStep === "PersonalInfo"}
      />
      <Step number={2} info="SELECT PLAN" isSelected={currentStep === "Plan"} />
      <Step number={3} info="ADD-ONS" isSelected={currentStep === "Addons"} />
      <Step number={4} info="SUMMARY" isSelected={currentStep === "Summary"} />
    </div>
  );
};
