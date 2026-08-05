import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import { Link } from "react-router-dom";
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

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="container">
      <div className="left-section">
  <h1>Build a Greener Future 🌿</h1>

  <p>
    AI-powered carbon intelligence helping businesses measure,
    analyze, and reduce their environmental impact.
  </p>

  <div className="stats">
    <div>
      <h2>50+</h2>
      <span>Organizations</span>
    </div>

    <div>
      <h2>10K+</h2>
      <span>Users</span>
    </div>

    <div>
      <h2>98%</h2>
      <span>AI Accuracy</span>
    </div>
  </div>
</div>
      <div className="card">
        <h1 style={{
    fontSize: "48px",
    textAlign: "center",
    color: "#1b5e20",
    marginBottom: "10px",
    fontWeight: "800",
    letterSpacing: "2px",}}>
    CarbonIQ
    </h1>

     <p style={{
    textAlign: "center",
    color: "#666",
    marginBottom: "30px",
    }}>

  AI Powered Carbon Intelligence Platform
   </p>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={handleLogin}>
          Login
        </button>
        <p style={{ marginTop: "15px" }}>
        Don’t have an account?{" "}

       <Link
       to="/register"
       style={{
      color: "#1b5e20",
      fontWeight: "bold",
      }}
       >
    Register
  </Link>
   </p>
      </div>
    </div>
  );
}

export default Login;
