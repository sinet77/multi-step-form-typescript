import * as style from "./End.styles";
import { Box } from "@mui/material";

const End = () => {
  return (
    <Box sx={style.Finish}>
      <img
        src="src/assets/images/icon-thank-you.svg"
        alt="tick-in-circle-icon"
        className="tick-in-circle-icon"
      ></img>

      <Box component="h1" sx={style.FinishText1}>
        Thank you!
      </Box>
      <Box component="p" sx={style.FinishText2}>
        Thank you for confirming your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Box>
    </Box>
  );
};

export default End;
