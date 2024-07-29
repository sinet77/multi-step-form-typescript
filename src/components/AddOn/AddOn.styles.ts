import { SxProps } from "@mui/material";

export const AddonCheckbox: SxProps = {
  "&.Mui-checked": {
    color: "blue",
  },
};
export const Title: SxProps = {
  color: "hsl(213, 96%, 18%)",
  fontWeight: 700,
  fontSize: "16px",
  marginBottom: "5px",
};

export const SubTitle: SxProps = {
  fontSize: "14px",
  color: "hsl(231, 11%, 56%)",
};

export const Paragraph: SxProps = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
};

export const UpPrice: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "rgb(67, 67, 198)",
};
