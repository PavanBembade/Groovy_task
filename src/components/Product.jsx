import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://fakestoreapi.com/products")
      .then((responce) => {
        setData(responce.data);
        setFilter(responce.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterProduct = (categaries) => {
    const updatedList = data.filter((x) => x.category === categaries);
    setFilter(updatedList);
  };
  console.log("data", data);

  return (
    <div>
      <div className="container py-3">
        <div className="row">
          {/* <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div> */}
        </div>
      </div>
      <div className="buttons d-flex justify-content-center mb-4 pb-4 py-4">
        <button
          className="btn btn-outline-primary me-3"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-primary me-3"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-primary me-3"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-primary me-3"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-primary me-3"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {filter.map((item) => (
            <div
              className="card my-4 py-4"
              key={item.id}
              style={{ width: "18rem" }}
            >
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                height="250px"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title.substring(0,30)}...</h5>
                <p className="lead">${item.price}</p>
                <NavLink
                  to={`/products/${item.id}`}
                  className="btn btn-outline-primary"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
