import { SxProps } from "@mui/material";

export const PlanButton: SxProps = {
  display: "flex",
  textAlign: "left",
  flexDirection: "column",
  padding: "10px",
  width: "100%",
  height: "100%",
  marginRight: "15px",
  borderRadius: "5px",
  cursor: "pointer",
  border: "1px solid hsl(231, 11%, 63%)",
  transition: "background-color 0.3s, border 0.3s",
  "&:hover": {
    border: "1px solid hsl(213, 96%, 18%)",
    backgroundColor: "hsl(288, 13%, 95%)",
  },
  "& img": {
    width: "30px",
    height: "auto",
  },
};

export const ButtonText: SxProps = {
  color: "hsl(213, 96%, 18%)",
  fontWeight: 500,
  fontSize: "16px",
  marginTop: "40px",
  marginBottom: "5px",
};

export const ButtonPrice: SxProps = {
  color: "hsl(231, 11%, 63%)",
  fontSize: "14px",
};

export const FreeMonths: SxProps = {
  fontSize: "12px",
  color: "hsl(213, 96%, 18%)",
  marginTop: "5px",
  fontWeight: 500,
};
