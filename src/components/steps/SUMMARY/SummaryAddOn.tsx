import { Box } from "@mui/material";
import { avaiableAddons } from "../../../plans";
import * as style from "./Summary.styles";

type AddOnPriceProps = {
  mode: "monthly" | "yearly";
  selectedAddOnsId: string[];
};

export const SummaryAddOn = ({ selectedAddOnsId, mode }: AddOnPriceProps) => {
  return (
    <>
      <Box>
        {selectedAddOnsId.map((addOnId) => {
          const addOn = avaiableAddons.find((addon) => addon.id === addOnId);
          return addOn ? (
            <Box key={addOn.id} sx={style.SelectedAddOn}>
              <Box sx={style.SelectedAddOnTitle}>{addOn.title}</Box>
              <Box sx={style.SelectedAddOnPrice}>
                {mode === "monthly"
                  ? `$${addOn.price[mode]}/mo`
                  : `$${addOn.price[mode]}/yr`}
              </Box>
            </Box>
          ) : (
            <></>
          );
        })}
      </Box>
    </>
  );
};
