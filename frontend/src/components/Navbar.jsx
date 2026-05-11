import { useNavigate } from "react-router-dom";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();

  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  const handleLogout = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <div
      style={{
        background: darkMode
          ? "#1e1e1e"
          : "white",

        color: darkMode
          ? "white"
          : "black",

        padding: "20px 30px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        boxShadow:
          "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h2>
        AI-Powered Carbon Intelligence Platform
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={toggleTheme}>
          {darkMode
            ? "Light Mode"
            : "Dark Mode"}
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;