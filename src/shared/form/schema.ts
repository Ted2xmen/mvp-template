import * as yup from "yup";

export enum AuthFields {
  email = "email",
  password = "password",
}

export const defaultValues: Record<AuthFields, string> = {
  email: "",
  password: "",
};

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
