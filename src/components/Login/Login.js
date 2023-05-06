import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextFields";
import * as Yup from "yup";
import LoginJpg from "../../assets/login.jpg";

export const Login = () => {
  //login validation using yup
  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, "Must be 15 characters or less")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  //formik form starts here
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="container mt-5 mb-4">
          <div className="row shadow-lg p-3 mt-1 pb-5 mb-5">
            <div className="col-md-5">
              <div className="mt-5 pt-5 mb-5">
                <h1 className="my-4 font-weight-bold .display-4">Sign In</h1>
                <Form>
                  {/* <TextField label="last Name" name="lastName" type="text" /> */}
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Passcode" name="firstName" type="text" />
                  {/* <TextField label="password" name="password" type="password" /> */}
                  {/* <TextField label="Confirm Password" name="confirmPassword" type="password" /> */}
                  <button
                    className="btn btn-success shadow btn-lg mt-3 me-4"
                    type="submit"
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-danger shadow btn-lg mt-3 ml-3"
                    type="reset"
                  >
                    Reset
                  </button>
                </Form>
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <img className="img-fluid w-100" src={LoginJpg} alt="" />
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
