import { PlanProps } from "./Plan.types";
import * as style from "./Plan.styles";
import { Box } from "@mui/material";

export const Plan = ({
  title,
  icon,
  price,
  bonus,
  onSelect,
  highlighted,
}: PlanProps) => {
  return (
    <div className={"planButton " + highlighted} onClick={onSelect}>
      <img src={icon} alt="" />
      <Box sx={style.ButtonText}>{title}</Box>
      <Box sx={style.ButtonPrice}>{price}</Box>
      <Box sx={style.FreeMonths}>{bonus}</Box>
    </div>
  );
};
