import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailChecker, setemailChecker] = useState("");
  const [passwordChecker, setpasswordChecker] = useState("");
  const handleEmail = (event) => {
    setemail(event.target.value);
    if (
      event.target.value.match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ) !== null
    ) {
      setemailChecker("");
    } else if (event.target.value === "") {
      setemailChecker("");
    } else {
      setemailChecker("Invalid E-mail!");
    }
  };
  const showPassword = () => {
    let passInput = document.getElementById("exampleInputPassword1");
    let passCheckbox = document.getElementById("exampleCheck1");
    if (passCheckbox.checked) {
      passInput.type = "text";
    } else {
      passInput.type = "password";
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === ""){
        setemailChecker('Email is required');
    }else if(password === ""){
        setpasswordChecker('Password is required')
    }

    if (
      email !== "" &&
      password !== "" &&
      emailChecker === ""
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        if (user.email !== email) {
          setemailChecker("Email don't exist");
        } else if (user.password !== password) {
          setpasswordChecker("Invalid Password");
        } else {
          localStorage.setItem("isLoggedIn", "true");
          navigate("/");
        }
      } else {
        console.log('object');
        alert("Email doesn't exist");
      }
    }
  };
  React.useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/");
    }
  });

  return (
    <form
      className={` container sectionHeight min-vh-100 d-flex flex-column justify-content-center col-lg-6`}
    >
      <div>
        <h1 className="text-center mb-3">Newsite Login</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          name="user-email"
          onChange={handleEmail}
          required
        />
        <div id="emailHelp" className={`form-text`}>
          We&apos;ll never share your email with anyone else.
        </div>
        <div id="emailHelp" className="form-text text-danger fs-6">
          {emailChecker}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="user-password"
          id="exampleInputPassword1"
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
            setpasswordChecker("")
          }}
          required
        />
      </div>
      <div id="emailHelp" className="form-text text-danger fs-6 mb-1">
        {passwordChecker}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={showPassword}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          show password
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary col-lg-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="my-2">
        <Link to={"/register"}>Don&apos;t have an account?</Link>
      </div>
    </form>
  );
}
