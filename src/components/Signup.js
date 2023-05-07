import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import rocketImg from "../assets/rocket.png";
import axios from "axios";
import { ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";


export const Signup = () => {
  //signup validations using yup
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
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  // const [field, meta] = useField("email");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    // Handle validations
    axios
      .post("http://localhost:8081/api/user/add", { email, name, price, stock })
      .then((response) => {
        // alert(response.data.message)
        console.log(response.data);
        // Handle response
      });
      // navigate('/login');
  };

  //handle formik form to sign up users
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
              <div className="">
                <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                <Form action="" onSubmit={handleSubmit} method="post">
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      // {...field}
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="error"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Price</label>
                    <input
                      className="form-control shadow"
                      label="price"
                      type="price"
                      name="price"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      // {...field}
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="error"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Stock</label>
                    <input
                      className="form-control shadow"
                      label="stock"
                      type="stock"
                      name="stock"
                      id="stock"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
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
