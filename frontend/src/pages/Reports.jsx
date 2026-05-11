import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReportGenerator from "../components/ReportGenerator";
import { useTheme } from "../context/ThemeContext";

function Reports() {
    const { darkMode } = useTheme();
    return (
    <div
    className={darkMode ? "dark" : ""}
    style={{
    display: "flex",
    background: darkMode
      ? "#121212"
      : "#f4f7fa",

    minHeight: "100vh",}}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: "700px",
            }}
          >
            <h1
              style={{
                marginBottom: "20px",
              }}
            >
              Sustainability Reports
            </h1>

            <p
              style={{
                marginBottom: "20px",
                color: "#555",
              }}
            >
              Download professional sustainability
              analytics reports with AI-powered
              recommendations.
            </p>

            <ReportGenerator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;