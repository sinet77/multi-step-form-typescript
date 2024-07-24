import { Button } from "@mui/material";
import { StepType } from "../../App";
import { avaiablePlans } from "../../plans";
import { HeadTitle } from "../HeadTitle";
import { Plan } from "../Plan";
import { ToggleSwitch } from "../ToggleSwitch";

type SelectYourPlanTypes = {
  goToNextStep: (step: StepType) => void;
  goToPreviousStep: (step: StepType) => void;
  selectMode: (mode: "yearly" | "monthly") => void;
  selectedMode: "yearly" | "monthly";
};

const SelectYourPlan = ({
  goToNextStep,
  goToPreviousStep,
  selectedMode,
  selectMode,
}: SelectYourPlanTypes) => {
  const monthPlan = () => {
    return selectedMode === "monthly";
  };

  function onChangeToggleSwitch() {
    const newMode = monthPlan() ? "yearly" : "monthly";
    selectMode(newMode);
  }

  return (
    <div className="formContainer">
      <HeadTitle
        title={"Select your plan"}
        paragraph={"You have the option of monthly or yearly billing."}
      />
      <div className="plans">
        {avaiablePlans.map((plan) => (
          <Plan
            key={plan.id}
            title={plan.title}
            icon={plan.icon}
            price={
              monthPlan()
                ? `$${plan.price.monthly}/mo`
                : `$${plan.price.yearly}/yr`
            }
            bonus={!monthPlan() ? "2 months free" : ""}
            onSelect={function (): void {}}
          />
        ))}
      </div>
      <ToggleSwitch
        onChange={onChangeToggleSwitch}
        selectedMode={selectedMode}
      />
      <div className="button-container">
        <div className="back-button-container">
          <Button
            className="back-button"
            variant="outlined"
            size="small"
            onClick={() => goToPreviousStep("PersonalInfo")}
          >
            Go back
          </Button>
        </div>

        <div className="next-button-container">
          <Button
            className="next-button"
            variant="contained"
            size="small"
            onClick={() => goToPreviousStep("Addons")}
          >
            Next step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectYourPlan;
