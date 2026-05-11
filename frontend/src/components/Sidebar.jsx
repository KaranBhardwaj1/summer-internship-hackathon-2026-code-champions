import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "#1b5e20",
        color: "white",
        padding: "25px",
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
          fontSize: "28px",
        }}
      >
        CarbonIQ
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link
          to="/dashboard"
          style={linkStyle}
        >
          Dashboard
        </Link>

        <Link
          to="/input"
          style={linkStyle}
        >
          Input Data
        </Link>

        <Link
          to="/reports"
          style={linkStyle}
        >
          Reports
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
};

export default Sidebar;