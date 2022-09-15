import React from "react";

export default function HeaderMenu() {
  return (
    <>
      <header className=" bg-dark text-white  align-items-center">
        <div className=" container d-flex justify-content-between p-2  ">
          <div className="logo">
            <a href="#" style={{ textDecoration: "none" }}>
              <img src="./img/image 3.png" alt="" />
            </a>
          </div>
          <div className="header-right d-flex align-items-center">
            <div className="search  mx-1">
              <img className=" mx-1" src="./img/search.png" alt="" />
              <span>Search</span>
            </div>
            <div className="icon  mx-1">
              <a href="#" style={{ textDecoration: "none" }}>
                <img className="mx-1" src="./img/giohang.png" alt="" />
              </a>
              (1)
            </div>
            <div className="login mx-1">
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Login
              </a>
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
