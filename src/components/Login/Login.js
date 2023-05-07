import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextFields";
import * as Yup from "yup";
import LoginJpg from "../../assets/login.jpg";
import axios from "axios";
import { ErrorMessage, useField } from "formik";

//login function
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

  const [username, setUsername] = useState();
  const [passcode, setPasscode] = useState();

  const handlesubmitLogin = (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    // Handle validations
    axios
      .post("http://localhost:8081/api/user/login", { username, passcode })
      .then((response) => {
        // alert(response.data.message)
        console.log(response.data);
        // Handle response
      });
    // navigate('/login');
  };

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
      // formik validations
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
                <Form action="" onSubmit={handlesubmitLogin} method="post">
                  <div className="mb-2">
                    <label>Email</label>
                    <input
                      className="form-control shadow"
                      label="email"
                      type="email"
                      name="email"
                      id="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* {meta.touched && meta.error && <div>{meta.error}</div>}
                    <ErrorMessage name="email" component="div" /> */}
                  </div>
                  <div className="mb-2">
                    <label>Name</label>
                    <input
                      className="form-control shadow"
                      label="name"
                      type="name"
                      name="name"
                      id="name"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      // {...field}
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="error"
                    />
                  </div>
                  <button
                    className="btn btn-success shadow btn-lg mt-3 me-4"
                    type="submit"
                  >
                    Login
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
