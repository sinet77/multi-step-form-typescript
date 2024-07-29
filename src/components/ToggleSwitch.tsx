import { Box, Switch } from "@mui/material";
import * as style from "./ToggleSwitch.style";

export const ToggleSwitch = ({
  onChange,
  selectedMode,
}: {
  onChange: () => void;
  selectedMode: "yearly" | "monthly";
}) => {
  return (
    <Box sx={style.Toggle}>
      <Box sx={style.BoldText}>Monthly</Box>
      <Switch onChange={onChange} checked={selectedMode === "yearly"} />
      <Box sx={style.BoldText}>Yearly</Box>
    </Box>
  );
};
