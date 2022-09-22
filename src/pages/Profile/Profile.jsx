import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProfileApi } from "../../redux/reducers/userReducer";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateProfileApi(values));
    },
  });
  return (
    <div className="container my-5">
      <h4 className="w-50 px-4 py-2 bg-success text-white">Profile</h4>

      <form
        className="my-5 d-flex align-items-center"
        onSubmit={frm.handleSubmit}
      >
        <div className="form-group w-25 mb-5">
          <img
            className="w-100 rounded-circle"
            src={userLogin.avatar}
            alt="avatar"
          />
        </div>
        <div className="ms-5 row w-75">
          <div className="col-6">
            <div className="form-group">
              <p>Email</p>
              <input
                className="form-control"
                id="email"
                name="name"
                placeholder={userLogin.email}
                disabled
              />
            </div>
            <div className="form-group mt-2">
              <p>Phone</p>
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder={userLogin.phone}
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Name</p>
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder={userLogin.name}
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
            </div>
            <div className="form-group mt-2">
              <p>Password</p>
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
            </div>
            <div className="form-group mt-2 d-flex">
              <span>Gender</span>
              <div role="group" className="d-flex align-items-center">
                <div className="ms-4 d-flex flex-column">
                  <input
                    type="radio"
                    name="gender"
                    value="true"
                    style={{ accentColor: "#6200EE", width: 40 }}
                    onChange={frm.handleChange}
                  />
                  <label>Male</label>
                </div>
                <div className="ms-4 d-flex flex-column">
                  <input
                    type="radio"
                    name="gender"
                    value="false"
                    onChange={frm.handleChange}
                    style={{ accentColor: "#6200EE", width: 40 }}
                  />
                  <label>Female</label>
                </div>
              </div>
            </div>
            <div className="form-group d-flex justify-content-end">
              <button
                className="btn rounded-pill text-white  px-3"
                style={{ backgroundColor: "#6200EE" }}
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
      <hr />

      {/* Order history and Favorite */}

      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-history-tab"
            data-toggle="tab"
            href="#nav-history"
            role="tab"
            aria-controls="nav-history"
            aria-selected="true"
          >
            Order History
          </a>
          <a
            className="nav-item nav-link"
            id="nav-favorite-tab"
            data-toggle="tab"
            href="#nav-favorite"
            role="tab"
            aria-controls="nav-favorite"
            aria-selected="false"
          >
            Favorite
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-history"
          role="tabpanel"
          aria-labelledby="nav-history-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-favorite"
          role="tabpanel"
          aria-labelledby="nav-favorite-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
}

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.23.2/antd.min.js"
  integrity="sha512-ktMcWbnTz8JSq52/Y8fdaSL28qmPKIJMXQqgwkEJGge1oWZ599hssJFlA++F/PmPMPkp4aWZIgvDLp9Wt2PQZw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>;
