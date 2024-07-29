import { Box, Checkbox } from "@mui/material";

import * as styles from "./AddOn.styles";
import { AddOnProps } from "./AddOn.types";

export const AddOn = ({
  title,
  info,
  price,
  onSelect,
  checked,
  highlighted,
}: AddOnProps) => {
  return (
    <Box className={"check-box-item " + highlighted} onClick={onSelect}>
      <Checkbox sx={styles.AddonCheckbox} checked={checked} size="small" />
      <Box sx={styles.Paragraph}>
        <Box sx={styles.Title}>{title}</Box>
        <Box sx={styles.SubTitle}>{info}</Box>
      </Box>
      <Box sx={styles.UpPrice}>{price}</Box>
    </Box>
  );
};
