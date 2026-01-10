import * as Yup from "yup"

export const registerSchemas = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  username: Yup.string().required("Username is required").email('email format is invalid'),
  password: Yup.string().required("Password is required"),
});