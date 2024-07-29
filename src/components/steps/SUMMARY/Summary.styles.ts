import { SxProps } from "@mui/material";

export const ButtonContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  bottom: 0,
  padding: "15px",
  width: "100%",
};

export const SummaryContainer: SxProps = {
  paddingTop: "30px",
  paddingRight: "50px",
  position: "relative",
  maxWidth: "100%",
};

export const SelectedAddOn: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "10px",
  paddingBottom: "5px",
};

export const SelectedAddOnTitle: SxProps = {
  color: "hsl(231, 11%, 63%)",
  fontSize: 14,
};

export const SelectedAddOnPrice: SxProps = {
  color: "hsl(213, 96%, 18%)",
  fontSize: 14,
};

export const Line: SxProps = {
  width: "100%",
  height: "1px",
  backgroundColor: "hsl(231, 11%, 83%)",
  marginBottom: "20px",
};

export const Table: SxProps = {
  width: "100%",
  backgroundColor: "hsl(231, 11%, 95%)",
  padding: "15px",
  paddingBottom: "5px",
  borderRadius: "10px",
};

export const Together: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "10px",
};

export const Option1: SxProps = {
  marginBottom: "5px",
  color: "hsl(213, 96%, 18%)",
  fontWeight: "bold",
};

export const ChangeButton: SxProps = {
  color: "hsl(251, 61%, 54%)",
  textDecoration: "underline",
  textTransform: "lowercase",
  "&:hover": {
    border: "none",
    backgroundColor: "transparent",
  },
};

export const Price: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
  marginLeft: "200px",
  color: "hsl(213, 96%, 18%)",
  fontWeight: "bold",
};

export const TotalSum: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  marginTop: "15px",
  alignItems: "center",
  fontSize: "14px",
  color: "hsl(251, 61%, 54%)",
  fontWeight: "bold",
};

export const Total: SxProps = {
  color: "hsl(231, 11%, 63%)",
  fontSize: "15",
};

export const SumPrice: SxProps = {
  fontSize: "20",
};
