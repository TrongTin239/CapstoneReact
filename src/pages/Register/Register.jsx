import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register(props) {
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      gender: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("This field cannot be blank!")
        .email("Invalid email!"),
      password: Yup.string()
        .required("This field cannot be blank!")
        .min(6, "Password is at least 6 characters long!"),
      passwordConfirm: Yup.string().required("This field cannot be blank!"),
      name: Yup.string().required("This field cannot be blank!"),
      phone: Yup.string()
        .required("This field cannot be blank!")
        .min(6, "Minimum 6 number!")
        .max(10, "Maximum 10 number!")
        .matches(phoneRegex, "Invalid phone number"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container my-5 px-5">
      <h2>Register</h2>
      <hr />
      <form className="row" onSubmit={frm.handleSubmit}>
        <div className="col-6">
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
              <span className="text-danger"> {frm.errors.email}</span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-2">
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
              <span className="text-danger"> {frm.errors.password}</span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-2">
            <p>Password confirm</p>
            <input
              className="form-control"
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            {frm.errors.passwordConfirm ? (
              <span className="text-danger"> {frm.errors.passwordConfirm}</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <p>Name</p>
            <input
              className="form-control"
              id="name"
              name="name"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            {frm.errors.name ? (
              <span className="text-danger"> {frm.errors.name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-2">
            <p>Phone</p>
            <input
              className="form-control"
              id="phone"
              name="phone"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            {frm.errors.phone ? (
              <span className="text-danger"> {frm.errors.phone}</span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-4 d-flex align-items-center">
            <span>Gender</span>
            <div className="ms-4 d-flex flex-column">
              <input
                type="radio"
                id="male"
                name="gender"
                value="true"
                style={{ accentColor: "#6200EE", width: 40, height: 40 }}
              />
              <label>Male</label>
            </div>
            <div className="ms-4 d-flex flex-column">
              <input
                type="radio"
                id="female"
                name="gender"
                value="false"
                style={{ accentColor: "#6200EE", width: 40, height: 40 }}
              />
              <label>Female</label>
            </div>
          </div>
          <div className="form-group mt-4">
            <button
              className="btn rounded-pill text-white text-uppercase px-3"
              style={{ backgroundColor: "#6200EE" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
