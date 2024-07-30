import { useFormik } from "formik";
import { personalInfoSchema } from "../../../schemas/personalInfoSchema";
import { Box, Button, TextField } from "@mui/material";
import { HeadTitle } from "../../HeadTitle/HeadTitle";
import * as styles from "./Main.styles";
import { useAppContext } from "../../../context/appContext";

const PersonalInfo = () => {
  const { onStepChange, personalInfo, setPersonalInfo } = useAppContext();
  const formik = useFormik({
    initialValues: personalInfo,
    validationSchema: personalInfoSchema,
    onSubmit: (values) => {
      setPersonalInfo(values);
      onStepChange("Plan");
    },
  });
  return (
    <Box sx={styles.FormContainer}>
      <HeadTitle
        title="Personal info"
        paragraph="Please provide your name, email adress and phone number."
      />
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box>
          <TextField
            fullWidth
            margin="dense"
            id="name"
            label="Name"
            variant="outlined"
            placeholder="e.g. Stephen King"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ marginTop: 3 }}
          />
          <TextField
            fullWidth
            margin="dense"
            id="email"
            label="Email Address"
            variant="outlined"
            placeholder="e.g. stephenking@lorem.com"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            placeholder="e.g. +1 234 567 890"
            {...formik.getFieldProps("phoneNumber")}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            sx={{ marginBottom: 3 }}
          />
        </Box>

        <Button variant="contained" size="small" type="submit">
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
