import { Button } from "@mui/material";
import { StepType } from "../../App";
import { avaiableAddons } from "../../plans";
import { AddOn } from "../AddOn";
import { HeadTitle } from "../HeadTitle";

type SelectYourAddOnsTypes = {
  goToNextStep: (step: StepType) => void;
  goToPreviousStep: (step: StepType) => void;
  chosenMode: "yearly" | "monthly";
};

export const PickAddOns = ({
  goToNextStep,
  goToPreviousStep,
  chosenMode,
}: SelectYourAddOnsTypes) => {
  return (
    <div className="formContainer">
      <HeadTitle
        title="Pick add-ons"
        paragraph="Add-ons help enhance your gaming experience."
      />
      {avaiableAddons.map((addon) => (
        <AddOn
          key={addon.id}
          title={addon.title}
          info={addon.description}
          price={
            chosenMode === "monthly"
              ? `$${addon.price.monthly}/mo`
              : `$${addon.price.yearly}/yr`
          }
        />
      ))}
      <div className="button-container">
        <div className="back-button-container">
          <Button
            className="back-button"
            variant="outlined"
            size="small"
            onClick={() => goToPreviousStep("Plan")}
          >
            Go back
          </Button>
        </div>

        <div className="next-button-container">
          <Button
            className="next-button"
            variant="contained"
            size="small"
            onClick={() => goToPreviousStep("Summary")}
          >
            Next step
          </Button>
        </div>
      </div>
    </div>
  );
};
