import { useNavigate } from "react-router-dom";

function RoleSelector() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      

      <div
        style={{
          padding: "60px 80px 20px 80px"
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            margin: 0,
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#d1d1d1"
          }}
        >
          Feature Flag Management
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "24px",
            color: "#9e9e9e"
          }}
        >
          Select your role to continue
        </p>
      </div>

      

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          padding: "40px 80px 80px 80px",
          boxSizing: "border-box"
        }}
      >
        

        <div
          onClick={() =>
            navigate("/superadmin")
          }
          style={cardStyle}
        >
          <div>
            <h1 style={titleStyle}>
              Super Admin
            </h1>

            <p style={descStyle}>
              Manage organizations and control
              the platform.
            </p>
          </div>

          <div style={buttonStyle}>
            Continue →
          </div>
        </div>

     

        <div
          onClick={() =>
            navigate("/admin/login")
          }
          style={cardStyle}
        >
          <div>
            <h1 style={titleStyle}>
              Admin
            </h1>

            <p style={descStyle}>
              Create and manage feature flags.
            </p>
          </div>

          <div style={buttonStyle}>
            Continue →
          </div>
        </div>

        

        <div
          onClick={() =>
            navigate("/user")
          }
          style={cardStyle}
        >
          <div>
            <h1 style={titleStyle}>
              User
            </h1>

            <p style={descStyle}>
              Check feature availability for
              your organization.
            </p>
          </div>

          <div style={buttonStyle}>
            Continue →
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: 1,
  height: "100%",
  maxHeight: "430px",
  background: "#d9d9d9",
  borderRadius: "28px",
  padding: "45px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  transition: "0.3s",
  boxShadow:
    "0px 10px 40px rgba(0,0,0,0.5)"
};

const titleStyle = {
  fontSize: "42px",
  marginBottom: "24px",
  color: "#111111"
};

const descStyle = {
  fontSize: "20px",
  lineHeight: "34px",
  color: "#333333"
};

const buttonStyle = {
  width: "fit-content",
  padding: "14px 22px",
  background: "#111111",
  color: "white",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "16px"
};

export default RoleSelector;