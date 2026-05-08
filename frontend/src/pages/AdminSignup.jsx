import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function AdminSignup() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    organization,
    setOrganization
  ] = useState("");

  const handleSignup = async () => {
    try {
      await API.post(
        "/admin/signup",
        {
          name,
          email,
          password,
          organization
        }
      );

      alert("Signup Successful");

      navigate("/admin/login");
    } catch (error) {
      alert(
        error.response?.data
          ?.message || "Signup Failed"
      );
    }
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>
          Admin Signup
        </h1>

        <p style={subText}>
          Create admin account for your
          organization
        </p>

        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={inputStyle}
        />

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

        <input
          placeholder="Organization ID"
          value={organization}
          onChange={(e) =>
            setOrganization(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <button
          onClick={handleSignup}
          style={buttonStyle}
        >
          Signup
        </button>
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

export default AdminSignup;