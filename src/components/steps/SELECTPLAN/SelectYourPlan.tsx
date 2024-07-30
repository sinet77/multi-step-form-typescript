import { Box, Button } from "@mui/material";
import { avaiablePlans } from "../../../plans";
import { HeadTitle } from "../../HeadTitle/HeadTitle";
import { Plan } from "../../Plan/Plan";
import { ToggleSwitch } from "../../ToggleSwitch";
import * as styles from "./Plans.styles";
import { useAppContext } from "../../../context/appContext";

const SelectYourPlan = () => {
  const {
    onStepChange,
    selectedMode,
    setSelectedMode,
    setSelectedPlanId,
    selectedPlanId,
  } = useAppContext();

  const monthPlan = () => {
    return selectedMode === "monthly";
  };

  function onChangeToggleSwitch() {
    const newMode = monthPlan() ? "yearly" : "monthly";
    setSelectedMode(newMode);
  }

  function handlePlanSelect(planId: string) {
    setSelectedPlanId(planId);
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
            isHighlighted={selectedPlanId === plan.id}
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
          onClick={() => onStepChange("PersonalInfo")}
        >
          Go back
        </Button>

        <Button
          className="next-button"
          variant="contained"
          size="small"
          onClick={() => selectedPlanId && onStepChange("Addons")}
        >
          Next step
        </Button>
      </Box>
    </Box>
  );
};

export default SelectYourPlan;
