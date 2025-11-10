import React, { useState } from "react";
import './CSS/Loginsignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login"); // "Login" or "Sign Up"
  const [formData, setFormData] = useState({
    name: "",      // Backend expects 'name' not 'username'
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login function
  const login = async () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login. Check console for details.");
    }
  };

  // Signup function
  const signup = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("An error occurred during signup. Check console for details.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Your Password"
          />
        </div>

        <button onClick={() => (state === "Login" ? login() : signup())}>
          Continue
        </button>

        {/* Conditional text for switching forms */}
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an Account{" "}
            <span onClick={() => setState("Sign Up")}>click here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
