import * as yup from "yup";

const basicSchema = yup.object({
  username: yup.string().required('username is required!'),
  email: yup.string().email("Inavalid Email!").required("email is required!"),
  password: yup.string().min(5).required("Password is required!")
})