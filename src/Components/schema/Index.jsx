import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;

 export const basicSchema = yup.object().shape({
  name: yup
    .string()
    // .name("pls enter the valid name")
    .required("name is required"),
  email: yup
    .string()
    .email("pls enter the valid email")
    .required("email is required"),
  Password: yup
    .string()
    .min(5, "min 5 param requird")
    .matches({passwordRules})
    .required("this field is must required"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "password and confirm password are not matching"
    )
    .required("this field is must required"),
});

