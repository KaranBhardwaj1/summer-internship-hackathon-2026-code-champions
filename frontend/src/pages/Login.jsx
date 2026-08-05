import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";
import {
  FaLeaf,
  FaLock,
  FaEnvelope,
  FaRobot,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import "../styles/Login.css";

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
    <div className="login-page">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="left">

        <div className="logo-circle">
          <FaLeaf />
        </div>

        <h1>CarbonIQ</h1>

        <p className="subtitle">
          AI Powered Carbon Intelligence Platform
        </p>

        <div className="feature-card">
          <FaRobot />
          <div>
            <h3>AI Prediction</h3>
            <p>Forecast carbon emissions using AI.</p>
          </div>
        </div>

        <div className="feature-card">
          <FaChartLine />
          <div>
            <h3>Analytics</h3>
            <p>Visual dashboards & insights.</p>
          </div>
        </div>

        <div className="feature-card">
          <FaGlobe />
          <div>
            <h3>Sustainability</h3>
            <p>Track and reduce your footprint.</p>
          </div>
        </div>

      </div>

      <div className="right">

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <p>Sign in to continue</p>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button onClick={handleLogin}>
            Login
          </button>

          <div className="register">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
