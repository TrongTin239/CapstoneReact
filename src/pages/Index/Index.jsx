import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductApi } from "../../Redux/reducers/productReducer";

import "./index.css";

export default function Carousel() {
  // const [arrProduct, setArrProduct] = useState([]);

  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getAllProductApi = () => {
    const action = getProductApi();
    dispatch(action);
  };

  useEffect(() => {
    getAllProductApi();
  }, []);
  const renderProduct = () => {
    return arrProduct?.map((prod, index) => {
      return (
        <div
          key={index}
          className={`carousel-item  ${prod.id === 1 ? "active" : ""}`}
        >
          <img src={prod.image} className=" ps-5 w-1000%" alt="..." />
          <div className="item-info">
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <button>Buy now</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div id="carousel" className="carousel-inner">
          <div style={{ position: "relative" }}>
            {renderProduct()}

            {/* <div className="carousel-item active  ">
              <a href="Index.html">
                <img
                  src="./img/image 4.png"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
              <div className="item-info">
                <h3>Product name</h3>
                <p>Product description ....</p>
                <button>Buy now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./img/image 4.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="item-info">
                <h3>Product name</h3>
                <p>Product description ....</p>
                <button>Buy now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./img/image 4.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="item-info">
                <h3>Product name</h3>
                <p>Product description ....</p>
                <button>Buy now</button>
              </div>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
