import { Box, Button } from "@mui/material";
import { Mode, StepType } from "../../../App";
import { avaiablePlans } from "../../../plans";
import { HeadTitle } from "../../HeadTitle/HeadTitle";
import { Plan } from "../../Plan/Plan";
import { ToggleSwitch } from "../../ToggleSwitch";
import * as styles from "./Plans.styles";

type SelectYourPlanTypes = {
  goToNextStep: (step: StepType) => void;
  goToPreviousStep: (step: StepType) => void;
  selectMode: (mode: Mode) => void;
  selectedMode: Mode;
  onPlanSelect: (planId: string) => void;
  currentPlanId: string | undefined;
};

const SelectYourPlan = ({
  goToNextStep,
  goToPreviousStep,
  selectedMode,
  selectMode,
  onPlanSelect,
  currentPlanId,
}: SelectYourPlanTypes) => {
  const monthPlan = () => {
    return selectedMode === "monthly";
  };

  function onChangeToggleSwitch() {
    const newMode = monthPlan() ? "yearly" : "monthly";
    selectMode(newMode);
  }

  function handlePlanSelect(planId: string) {
    onPlanSelect(planId);
  }

  return (
    <Box sx={styles.PlansContainer}>
      <HeadTitle
        title={"Select your plan"}
        paragraph={"You have the option of monthly or yearly billing."}
      />
      <Box sx={styles.Plans}>
        {avaiablePlans.map((plan) => (
          <Plan
            key={plan.id}
            title={plan.title}
            icon={plan.icon}
            highlighted={currentPlanId === plan.id ? "clicked" : ""}
            price={
              monthPlan()
                ? `$${plan.price.monthly}/mo`
                : `$${plan.price.yearly}/yr`
            }
            bonus={!monthPlan() ? "2 months free" : ""}
            onSelect={() => handlePlanSelect(plan.id)}
          />
        ))}
      </Box>
      <ToggleSwitch
        onChange={onChangeToggleSwitch}
        selectedMode={selectedMode}
      />
      <Box sx={styles.ButtonContainer}>
        <Button
          className="back-button"
          variant="outlined"
          size="small"
          onClick={() => goToPreviousStep("PersonalInfo")}
        >
          Go back
        </Button>

        <Button
          className="next-button"
          variant="contained"
          size="small"
          onClick={() => currentPlanId && goToNextStep("Addons")}
        >
          Next step
        </Button>
      </Box>
    </Box>
  );
};

export default SelectYourPlan;
