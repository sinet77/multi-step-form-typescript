import "./App.css";
import PersonalInfo from "./components/steps/YOURINFO/PersonalInfo";
import { StepBar } from "./components/StepBar";
import SelectYourPlan from "./components/steps/SELECTPLAN/SelectYourPlan";
import { PickAddOns } from "./components/steps/ADDONS/PickAddOns";
import Summary from "./components/steps/SUMMARY/Summary";
import End from "./components/steps/END/End";
import AppContextProvider, { useAppContext } from "./context/appContext";
import { Box } from "@mui/material";
import * as style from "./App.style";

export type StepType =
  | "PersonalInfo"
  | "Plan"
  | "Addons"
  | "Summary"
  | "Finish";

export type Mode = "monthly" | "yearly";

const AppContent = () => {
  const {
    step,
    setStep,
    selectedMode,
    setSelectedMode,
    selectedPlanId,
    setSelectedPlanId,
    selectedAddOnsId,
    setSelectedAddOnsId,
    getPriceFromThePlan,
  } = useAppContext();

  return (
    <Box sx={style.Background}>
      <Box sx={style.WhiteBoard}>
        <StepBar currentStep={step} />
        {step === "PersonalInfo" && <PersonalInfo goToNextStep={setStep} />}
        {step === "Plan" && (
          <SelectYourPlan
            goToPreviousStep={setStep}
            goToNextStep={setStep}
            selectMode={setSelectedMode}
            selectedMode={selectedMode}
            currentPlanId={selectedPlanId}
            onPlanSelect={setSelectedPlanId}
          />
        )}
        {step === "Addons" && (
          <PickAddOns
            goToPreviousStep={setStep}
            goToNextStep={setStep}
            chosenMode={selectedMode}
            selectedAddOnsId={selectedAddOnsId}
            setSelectedAddOnsId={setSelectedAddOnsId}
          />
        )}
        {step === "Summary" && (
          <Summary
            goToPreviousStep={setStep}
            goToNextStep={setStep}
            selectedPlanId={selectedPlanId}
            selectedMode={selectedMode}
            selectedAddOnsId={selectedAddOnsId}
            getPriceFromThePlan={getPriceFromThePlan}
          />
        )}
        {step === "Finish" && <End />}
      </Box>
    </Box>
  );
};

function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}

export default App;
