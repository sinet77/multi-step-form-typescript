import { useFormik } from "formik";
import { personalInfoSchema } from "../../schemas/personalInfoSchema";
import { Button, TextField, Typography } from "@mui/material";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: personalInfoSchema,
    onSubmit: onSubmit,
  });
  return (
    <div className="formContainer">
      <Typography variant="h5" className="text1" gutterBottom>
        Personal info
      </Typography>
      <Typography variant="subtitle2" className="text2" gutterBottom>
        Please provide your name, email adress and phone number.
      </Typography>
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
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
