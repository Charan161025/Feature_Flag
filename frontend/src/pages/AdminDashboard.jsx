import { useEffect, useState } from "react";
import API from "../api/axios";

function AdminDashboard() {
  const [features, setFeatures] =
    useState([]);

  const [featureKey, setFeatureKey] =
    useState("");

  const token =
    localStorage.getItem("token");

  

  const fetchFeatures = async () => {
    try {
      const res = await API.get(
        "/features",
        {
          headers: {
            authorization: token
          }
        }
      );

      setFeatures(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  

  const createFeature = async () => {
    if (!featureKey.trim()) return;

    try {
      await API.post(
        "/features",
        {
          featureKey,
          enabled: true
        },
        {
          headers: {
            authorization: token
          }
        }
      );

      setFeatureKey("");

      fetchFeatures();
    } catch (error) {
      console.log(error);
    }
  };

  

  const toggleFeature = async (
    feature
  ) => {
    try {
      await API.put(
        `/features/${feature._id}`,
        {
          enabled:
            !feature.enabled
        },
        {
          headers: {
            authorization: token
          }
        }
      );

      fetchFeatures();
    } catch (error) {
      console.log(error);
    }
  };

  

  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <div style={pageStyle}>
      

      <div style={navbarStyle}>
        <div>
          <h1 style={headingStyle}>
            Admin Dashboard
          </h1>

          <p style={subText}>
            Manage feature flags
          </p>
        </div>

        <button
          onClick={logout}
          style={logoutButton}
        >
          Logout
        </button>
      </div>


      <div style={sectionStyle}>
        <h2
          style={{
            marginBottom: "20px"
          }}
        >
          Create Feature Flag
        </h2>

        <input
          placeholder="Feature Key"
          value={featureKey}
          onChange={(e) =>
            setFeatureKey(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={createFeature}
          style={buttonStyle}
        >
          Create Feature
        </button>
      </div>

     

      <div style={gridStyle}>
        {features.map((feature) => (
          <div
            key={feature._id}
            style={cardStyle}
          >
            

            <h2
              style={{
                marginBottom: "15px"
              }}
            >
              {feature.featureKey}
            </h2>

         

            <p
              style={{
                fontSize: "14px",
                marginBottom: "25px",
                wordBreak: "break-word",
                color: "#333"
              }}
            >
              <strong>
                Feature ID:
              </strong>

              <br />

              {feature._id}
            </p>

            

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center"
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              >
                {feature.enabled
                  ? "Enabled"
                  : "Disabled"}
              </span>

              

              <button
                onClick={() =>
                  toggleFeature(feature)
                }
                style={{
                  width: "70px",
                  height: "36px",
                  borderRadius: "30px",
                  border: "none",
                  background:
                    feature.enabled
                      ? "#4caf50"
                      : "#9e9e9e",
                  position: "relative",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "white",
                    position: "absolute",
                    top: "4px",
                    left:
                      feature.enabled
                        ? "38px"
                        : "4px",
                    transition: "0.3s"
                  }}
                />
              </button>
            </div>
          </div>
        ))}
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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  marginBottom: "40px"
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

const logoutButton = {
  padding: "16px 24px",
  borderRadius: "14px",
  border: "none",
  background: "#d9d9d9",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(320px,1fr))",
  gap: "25px"
};

const cardStyle = {
  background: "#d9d9d9",
  color: "black",
  padding: "30px",
  borderRadius: "20px"
};

export default AdminDashboard;