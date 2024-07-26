import { SxProps } from "@mui/material";

export const Plans: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  marginTop: "40px",
};

export const PlansContainer: SxProps = {
  paddingTop: "30px",
  paddingRight: "50px",
  position: "relative",
  maxWidth: "100%",
};

export const ButtonContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  bottom: 0,
  padding: "15px",
  width: "100%",
};
