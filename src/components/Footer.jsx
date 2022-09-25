import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
          <div
            className="col-3 d-flex flex-column border-right"
            style={{ borderRight: "1px solid" }}
          >
            <h5>GET HELP</h5>
            <span>Home</span>
            <span>Nike</span>
            <span>Adidas</span>
            <span>Contact</span>
          </div>
          <div
            className="col-3 d-flex flex-column  "
            style={{ borderRight: "1px solid" }}
          >
            <h5 className="">SUPPORT</h5>
            <span>About</span>
            <span>Contact</span>
            <span>Help</span>
            <span>Phone</span>
          </div>
          <div className="col-3 d-flex flex-column ">
            <h5>REGISTER</h5>
            <span>Register</span>
            <span>Login</span>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <span className="text-footer d-block p-2 text-center">
          © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn
          Khải.
        </span>
      </div>
    </>
  );
}
