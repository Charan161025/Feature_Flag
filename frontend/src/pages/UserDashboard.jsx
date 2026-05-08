import { useState } from "react";
import API from "../api/axios";

function UserDashboard() {
  const [organizationId, setOrganizationId] =
    useState("");

  const [featureId, setFeatureId] =
    useState("");

  const [result, setResult] =
    useState("");

  const checkFeature = async () => {
    try {
      const res = await API.post(
        "/user/check-feature",
        {
          organizationId,
          featureId
        }
      );

      setResult(
        res.data.enabled
          ? "Feature Enabled"
          : "Feature Disabled"
      );
    } catch (error) {
      alert("Error checking feature");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={navbarStyle}>
        <div>
          <h1 style={headingStyle}>
            User Dashboard
          </h1>

          <p style={subText}>
            Check feature availability
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <input
          placeholder="Organization ID"
          value={organizationId}
          onChange={(e) =>
            setOrganizationId(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <input
          placeholder="Feature ID"
          value={featureId}
          onChange={(e) =>
            setFeatureId(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={checkFeature}
          style={buttonStyle}
        >
          Check Feature
        </button>

        {result && (
          <div style={resultStyle}>
            <h2>{result}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#0b0b0b",
  padding: "50px",
  color: "#d1d1d1"
};

const navbarStyle = {
  marginBottom: "40px"
};

const headingStyle = {
  fontSize: "52px",
  marginBottom: "10px"
};

const subText = {
  color: "#9e9e9e",
  fontSize: "18px"
};

const sectionStyle = {
  marginTop: "30px"
};

const inputStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: "14px",
  border: "none",
  background: "#d9d9d9",
  marginBottom: "20px",
  fontSize: "16px",
  boxSizing: "border-box"
};

const buttonStyle = {
  padding: "16px 24px",
  borderRadius: "14px",
  border: "none",
  background: "#d9d9d9",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer"
};

const resultStyle = {
  background: "#d9d9d9",
  color: "black",
  padding: "25px",
  borderRadius: "18px",
  marginTop: "30px"
};

export default UserDashboard;