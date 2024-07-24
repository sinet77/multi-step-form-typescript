import { Typography } from "@mui/material";

type HeadTitleTypes = {
  title: string;
  paragraph: string;
};

export const HeadTitle = ({ title, paragraph }: HeadTitleTypes) => {
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
