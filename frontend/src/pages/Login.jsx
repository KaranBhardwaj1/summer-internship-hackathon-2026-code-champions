import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";
import {
  FaLeaf,
  FaLock,
  FaEnvelope,
  FaChartLine,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background:
          "linear-gradient(135deg,#0f2027,#203a43,#2c7744)",
        overflow: "hidden",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <FaLeaf size={45} color="#2e7d32" />
        </div>

        <h1
          style={{
            fontSize: "60px",
            marginBottom: 10,
            fontWeight: "800",
          }}
        >
          CarbonIQ
        </h1>

        <h2
          style={{
            fontWeight: "400",
            color: "#dcedc8",
            marginBottom: "40px",
          }}
        >
          AI Powered Carbon Intelligence Platform
        </h2>

        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 20, marginBottom: 20 }}>
            <FaRobot /> AI Carbon Prediction
          </p>

          <p style={{ fontSize: 20, marginBottom: 20 }}>
            <FaChartLine /> Smart Analytics Dashboard
          </p>

          <p style={{ fontSize: 20 }}>
            <FaGlobe /> Sustainable Future
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 430,
            padding: 45,
            borderRadius: 25,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 10px 40px rgba(0,0,0,.4)",
            color: "white",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: 35,
              fontSize: 34,
            }}
          >
            Welcome Back
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,.15)",
              padding: "14px",
              borderRadius: 12,
              marginBottom: 20,
            }}
          >
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              style={{
                flex: 1,
                marginLeft: 12,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: 16,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,.15)",
              padding: "14px",
              borderRadius: 12,
              marginBottom: 25,
            }}
          >
            <FaLock />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              style={{
                flex: 1,
                marginLeft: 12,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: 16,
              }}
            />
          </div>

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: 15,
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontSize: 18,
              background: "#4caf50",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Login
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: 25,
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#9cffb2",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
