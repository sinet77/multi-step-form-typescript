import { Typography } from "@mui/material";
import { HeadTitleProps } from "./HeadTitle.types";

export const HeadTitle = ({ title, paragraph }: HeadTitleProps) => {
  return (
    <>
      <Typography variant="h5" className="text1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2" className="text2" gutterBottom>
        {paragraph}
      </Typography>
    </>
  );
};
