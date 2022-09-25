import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  // console.log(userLogin);
  const temp = carts.productOrder.length;
  const [volumn, setVolumn] = useState(temp);
  useEffect(() => {
    setVolumn(temp);
  }, [temp]);
  // console.log(carts.productOrder.length);
  const checkLogin = () => {
    if (userLogin) {
      return navigate("/carts");
    } else {
      alert("đăng nhâp để vào giỏ hàng");
      return navigate("/login");
    }
  };
  return (
    <>
      <header
        className="  text-white  align-items-center"
        style={{ position: "sticky", zIndex: "10", top: "0" }}
      >
        <div className=" container d-flex justify-content-between p-2  ">
          <div className="logo">
            <NavLink to={"/"} style={{ textDecoration: "none" }}>
              <img src="./img/image 3.png" alt="" />
            </NavLink>
          </div>
          <div className="header-right d-flex align-items-center">
            <div className="search d-flex align-items-center mx-1">
              <img
                className=" mx-1"
                src="./img/search.png"
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/search`);
                }}
              />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/search`);
                }}
              >
                Search
              </span>
            </div>
            <div className="icon  mx-1">
              <img
                className="mx-1"
                src="./img/giohang.png"
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  checkLogin();
                }}
              />
              ({volumn})
            </div>
            <div className="login mx-1">
              <NavLink
                to={"/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </NavLink>
            </div>
            <div className="register mx-1">
              <a
                href="./Register.html"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse container" id="navbarNav">
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
    </>
  );
}
