import React, { useState } from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/actions/authActions";

const Login = () => {
  const state = useSelector((state) => state.registration.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errors, setErrors] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === state.userName && passWord === state.passWord) {
      const userData = {
        userName: state.userName,
      };
      dispatch(loginSuccess(userData));
      navigate('/')
    }else{
      setErrors("Wrong username and password")
    }
  };
console.log("d",state.userName , state.passWord);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="cards">
          <h4 className="text-center fw-bold mb-3">Login with registered data</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="example1" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="example1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassWord(e.target.value)}
                />
              </div>
              {errors && (
          <span className="text-danger">{errors}</span>
         )}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                Submit
              </button>
              <div>
                <p className="text-center mt-2">
                  Don't have Account{" "}
                  <NavLink to="/register">
                    <span>Create account</span>
                  </NavLink>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
