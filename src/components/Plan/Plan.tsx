import { PlanProps } from "./Plan.types";
import * as style from "./Plan.styles";
import { Box } from "@mui/material";

export const Plan = ({
  title,
  icon,
  price,
  bonus,
  onSelect,
  isHighlighted,
}: PlanProps) => {
  const combinedStyles = {
    ...style.PlanButton,
    ...(isHighlighted ? style.Clicked : {}),
  };

  return (
    <Box sx={combinedStyles} onClick={onSelect}>
      <img src={icon} alt={title} />
      <Box sx={style.ButtonText}>{title}</Box>
      <Box sx={style.ButtonPrice}>{price}</Box>
      <Box sx={style.FreeMonths}>{bonus}</Box>
    </Box>
  );
};
