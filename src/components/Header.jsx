import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function Header() {
  const { userLogin } = useSelector((state) => state.userReducer);

  const renderLoginNavItem = () => {
    if (!userLogin) {
      return (
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      );
    }
    return (
      <NavLink className="nav-link" to="/profile">
        Hello <span className="text-uppercase">{userLogin.name}</span> !
      </NavLink>
    );
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-black">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="./img/image 3.png" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <form className="form-inline ms-auto my-2 my-lg-0 d-flex align-items-center">
              <img style={{ height: 33 }} src="./img/download 1.png" alt="" />
              <input
                className="bg-black text-white"
                style={{
                  width: 100,
                  border: "none",
                  outline: "none",
                  fontSize: 30,
                }}
                type="text"
                placeholder="Search"
              />
            </form>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="">(1)</span>
                </a>
              </li>
              <li className="nav-item">{renderLoginNavItem()}</li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kid
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sport
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
