import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import axios from "axios";
import { NavLink , useNavigate} from "react-router-dom";

const ProductDetail = () => {
  const navigate= useNavigate();
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  
  const { id } = useParams();
  const [product, setProduct] = useState([]);
 
  console.log(product);

  useEffect(() => {
    axios
      .get(`http://fakestoreapi.com/products/${id}`)
      .then((responce) => {
        setProduct(responce.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = () => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.image} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="display-6 fw-bold">{product.title}</h2>
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.description}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary mt-5 mb-3"
            >
              {cartBtn}
            </button>
            {/* <NavLink to={`/`} className="btn btn-outline-primary m-0">
              Back to Products
            </NavLink> */}
            <button className="btn btn-outline-primary m-0" onClick={()=>navigate(-1)}>  Back to Products</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
