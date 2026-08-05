import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await registerUser(formData);

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
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
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Organization Name"
          onChange={handleChange}
        />

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

        <button onClick={handleRegister}>
          Register
        </button>
        <p style={{ marginTop: "15px" }}>
           Already have an account?{" "}

           <Link
            to="/"
            style={{
              color: "#1b5e20",
              fontWeight: "bold",
            }}
            >
    Login
  </Link>
            </p>
      </div>
    </div>
  );
}

export default Register;
