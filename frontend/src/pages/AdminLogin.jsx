import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function AdminLogin() {
  const navigate = useNavigate();

  

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post(
        "/admin/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      window.location.href =
        "/admin/dashboard";
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>
          Admin Login
        </h1>

        <p style={subText}>
          Login to manage feature flags
        </p>

        

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

       

        <button
          onClick={handleLogin}
          style={buttonStyle}
        >
          Login
        </button>

        

        <p
          style={{
            marginTop: "20px",
            color: "#9e9e9e"
          }}
        >
          Don't have an account?
          <span
            onClick={() =>
              navigate("/admin/signup")
            }
            style={{
              color: "#d9d9d9",
              cursor: "pointer",
              marginLeft: "6px"
            }}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}



const pageStyle = {
  position: "fixed",
  inset: 0,
  background: "#0b0b0b",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px"
};

const contentStyle = {
  width: "100%",
  maxWidth: "500px"
};

const headingStyle = {
  fontSize: "52px",
  color: "#d1d1d1",
  marginBottom: "15px"
};

const subText = {
  fontSize: "20px",
  color: "#9e9e9e",
  marginBottom: "35px"
};

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "14px",
  border: "none",
  background: "#d9d9d9",
  color: "black",
  fontSize: "16px",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: "14px",
  border: "none",
  background: "#d9d9d9",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer"
};

export default AdminLogin;