import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import rocketImg from "../assets/rocket.png";
import axios from "axios";
import { ErrorMessage, useField } from "formik";

export const Signup = () => {
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

  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    // Handle validations
    axios
      .post("http://localhost:8081/api/user/add", { email, name })
      .then((response) => {
        console.log(response);
        // Handle response
      });
  };

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
      {(props) => (
        <div className="container mt-5">
          <div className="row shadow-lg p-3">
            <div className="col-md-5">
              <div className="mt-5 pt-5">
                <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                <Form action="" onSubmit={handleSubmit} method="post">
                  {/* <TextField label="First Name" name="firstName" type="text" /> */}
                  {/* <TextField label="last Name" name="lastName" type="text" /> */}
                  {/* <TextField label="Email" name="email" type="email"/> */}
                  {/* <TextField label="password" name="password" type="password" /> */}
                  {/* <TextField label="Confirm Password" name="confirmPassword" type="password" /> */}
                  <div className="mb-2">
                    <label>Email</label>
                    <input
                      className="form-control shadow"
                      label="email"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    <ErrorMessage component="div" name="email" className="error"/>
                  </div>
                  <div className="mb-2">
                    <label>Name</label>
                    <input
                      className="form-control shadow"
                      label="name"
                      type="name"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                    Register
                  </button>
                </Form>
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <img className="img-fluid w-100" src={rocketImg} alt="" />
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
