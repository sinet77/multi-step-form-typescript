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
      <Checkbox
        sx={styles.AddonCheckbox}
        className="check-box"
        checked={checked}
        size="small"
      />
      <div className="paragraph">
        <div className="title">{title}</div>
        <div className="sub-title">{info}</div>
      </div>
      <div className="up-price">{price}</div>
    </Box>
  );
};
