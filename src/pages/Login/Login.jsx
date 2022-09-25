import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginApi } from "../../Redux/reducers/userReducer";


export default function Login() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required!").email("Invalid email!"),
      password: Yup.string()
        .required("Required!")
        .min(1, "Password must be having 1-10 characters!")
        .max(10, "Password must be having 6-10 characters!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginApi(values));
    },
  });
  return (
    <form className="container my-5 px-5" onSubmit={frm.handleSubmit}>
      <h2>Login</h2>
      <hr />
      <div className="w-50 m-auto">
        <div className="form-group">
          <p>Email</p>
          <input
            className="form-control"
            id="email"
            name="email"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          {frm.errors.email ? (
            <span className="text-danger">{frm.errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mt-4">
          <p>Password</p>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          {frm.errors.password ? (
            <span className="text-danger">{frm.errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mt-4 d-flex justify-content-end align-items-center">
          <NavLink className="nav-link text-primary fw-bold " to="/register">
            Register now?
          </NavLink>
          <div className="mx-5"></div>
          <button
            className="btn text-uppercase text-white px-3  rounded-pill ms-5"
            style={{ backgroundColor: "#6200EE" }}
          >
            Login
          </button>
        </div>
        <div className="form-group mt-4">
          <button
            className="w-100 py-2 rounded d-flex justify-content-center align-items-center btn btn-primary text-white"
            style={{ border: "none" }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="me-3"
              style={{ fontSize: 30 }}
            />
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </form>
  );
}
