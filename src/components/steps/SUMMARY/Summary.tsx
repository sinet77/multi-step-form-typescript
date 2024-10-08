import { Box, Button } from "@mui/material";
import { HeadTitle } from "../../HeadTitle/HeadTitle";
import * as styles from "./Summary.styles";
import { SummaryAddOn } from "./SummaryAddOn";
import { useAppContext } from "../../../context/appContext";

const Summary = () => {
  const {
    getTotalPrice,
    onStepChange,
    selectedPlanId,
    selectedAddOnsId,
    selectedMode,
    getPriceFromThePlan,
  } = useAppContext();
  return (
    <Box sx={styles.SummaryContainer}>
      <HeadTitle
        title={"Finishing up"}
        paragraph={"Double-check everything looks OK before confirming."}
      />

      <Box sx={styles.Table}>
        <Box sx={styles.Together}>
          <Box>
            <Box
              sx={styles.Option1}
            >{`${selectedPlanId} (${selectedMode})`}</Box>
            <Button
              sx={styles.ChangeButton}
              size="small"
              onClick={() => onStepChange("Plan")}
            >
              Change
            </Button>
          </Box>
          <Box sx={styles.Price}>{getPriceFromThePlan()}</Box>
        </Box>
        <Box sx={styles.Line}></Box>
        <SummaryAddOn selectedAddOnsId={selectedAddOnsId} mode={selectedMode} />
      </Box>
      <Box sx={styles.TotalSum}>
        <Box sx={styles.Total}>Total (per month)</Box>
        <Box sx={styles.SumPrice}>{getTotalPrice()}</Box>
      </Box>

      <Box sx={styles.ButtonContainer}>
        <Button
          className="back-button"
          variant="outlined"
          size="small"
          onClick={() => onStepChange("Addons")}
        >
          Go back
        </Button>

        <Button
          className="next-button"
          variant="contained"
          size="small"
          onClick={() => onStepChange("Finish")}
        >
          Next step
        </Button>
      </Box>
    </Box>
  );
};

export default Summary;
