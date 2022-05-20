import { boolean, object, SchemaOf, string } from "yup";
import { ISignupForm } from "./interfaces";

export const signupValidationSchema: SchemaOf<ISignupForm> = object({
  firstName: string().required("Enter First name"),
  lastName: string().required("Enter Last name"),
  password: string()
    .required("Enter password")
    .min(6, "Password must be more strong"),
  email: string().required("Enter email"),
  // .matches(
  //   /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
  //   "Invalid email"
  // )
  agreement: boolean()
    .required("Agreement must be signed")
    .oneOf([true], "Agreement must be signed"),
});
