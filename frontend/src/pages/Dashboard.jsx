import { useEffect, useState } from "react";
import API from "../api/axios";

function Dashboard() {
  const [name, setName] =
    useState("");

  const [organizations, setOrganizations] =
    useState([]);

  const token =
    localStorage.getItem("token");

  const fetchOrganizations =
    async () => {
      const res = await API.get(
        "/superadmin/organizations",
        {
          headers: {
            authorization: token
          }
        }
      );

      setOrganizations(res.data);
    };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const createOrganization =
    async () => {
      if (!name.trim()) return;

      await API.post(
        "/superadmin/organization",
        { name },
        {
          headers: {
            authorization: token
          }
        }
      );

      setName("");

      fetchOrganizations();
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
            Super Admin Dashboard
          </h1>

          <p style={subText}>
            Manage organizations
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
        <h2>Create Organization</h2>

        <input
          placeholder="Organization Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={createOrganization}
          style={buttonStyle}
        >
          Create Organization
        </button>
      </div>

      <div style={gridStyle}>
        {organizations.map((org) => (
          <div
            key={org._id}
            style={cardStyle}
          >
            <h2>{org.name}</h2>

            <p>{org._id}</p>
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
    "repeat(auto-fit,minmax(280px,1fr))",
  gap: "25px"
};

const cardStyle = {
  background: "#d9d9d9",
  color: "black",
  padding: "30px",
  borderRadius: "20px"
};

export default Dashboard;