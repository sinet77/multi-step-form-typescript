import { Box, Button } from "@mui/material";
import { StepType } from "../../../App";
import { avaiableAddons } from "../../../plans";
import { AddOn } from "../../AddOn/AddOn";
import { HeadTitle } from "../../HeadTitle/HeadTitle";
import * as styles from "./PickAddOns.styles";

type SelectYourAddOnsTypes = {
  goToNextStep: (step: StepType) => void;
  goToPreviousStep: (step: StepType) => void;
  chosenMode: "yearly" | "monthly";
  selectedAddOnsId: string[];
  setSelectedAddOnsId: (addOn: string[]) => void;
};

export const PickAddOns = ({
  goToNextStep,
  goToPreviousStep,
  chosenMode,
  setSelectedAddOnsId,
  selectedAddOnsId,
}: SelectYourAddOnsTypes) => {
  function handleAddOnSelect(addonId: string) {
    const isSelected = selectedAddOnsId.find((addon) => addon === addonId);
    if (isSelected) {
      const filteredIds = selectedAddOnsId.filter((id) => id !== addonId);
      setSelectedAddOnsId(filteredIds);
    } else {
      setSelectedAddOnsId([...selectedAddOnsId, addonId]);
    }
  }

  return (
    <Box sx={styles.AddOnContainer}>
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
          highlighted={
            selectedAddOnsId.includes(addon.id) ? "add-ons-bar-selected" : ""
          }
          onSelect={() => handleAddOnSelect(addon.id)}
          checked={selectedAddOnsId.includes(addon.id) ? true : false}
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
            onClick={() => goToNextStep("Summary")}
          >
            Next step
          </Button>
        </div>
      </div>
    </Box>
  );
};
