/* eslint-disable no-param-reassign */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import axios from "@services/axios";
// eslint-disable-next-line import/no-unresolved
import Navbar from "@components/navbar";
// eslint-disable-next-line import/no-unresolved
import { userContext } from "../contexts/UserContext";

export default function Login() {
  const { dispatch } = userContext();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const etiquette = document.querySelectorAll(".form-control label");

    etiquette.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 100}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  const handleInputChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return console.warn("you must provide an email and a password");
    }
    try {
      const { data } = await axios.post("user/login", userData, {
        withCredentials: true,
      });
      setUserData({ email: ", password:" });
      dispatch({ type: "LOGIN", payload: data });
      if (data.role === "ADMIN" || data.role === "USER") {
        return navigate("/user");
      }
    } catch (err) {
      return console.warn(err.message);
    }
  };

  return (
    <div className="homePage">
      <Navbar />
      <div className="homeAppel">
        <section className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="login-title">Log in</h1>
            <div className="form-control">
              <input
                type="email"
                className="login-input"
                id="email"
                value={userData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="username">Email</label>
            </div>
            <div className="form-control">
              <input
                type="password"
                className="login-input"
                id="password"
                // placeholder="your password"
                value={userData.password}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-control">
              <button className="login-btn" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
