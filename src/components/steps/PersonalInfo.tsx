import { useFormik } from "formik";
import { personalInfoSchema } from "../../schemas/personalInfoSchema";
import { Button, TextField } from "@mui/material";
import { HeadTitle } from "../HeadTitle";
import { StepType } from "../../App";

type PersonalInfoTypes = {
  goToNextStep: (step: StepType) => void;
};

const PersonalInfo = ({ goToNextStep }: PersonalInfoTypes) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: personalInfoSchema,
    onSubmit: () => goToNextStep("Plan"),
  });
  return (
    <div className="formContainer">
      <HeadTitle
        title="Personal info"
        paragraph="Please provide your name, email adress and phone number."
      />
      <form onSubmit={formik.handleSubmit}>
        <div className="bars">
          <TextField
            fullWidth
            margin="dense"
            id="name"
            name="name"
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
            name="email"
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
            name="phoneNumber"
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
        </div>

        <Button variant="contained" size="small" type="submit">
          Next Step
        </Button>
      </form>
    </div>
  );
};

export default PersonalInfo;
