import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import Charts from "../components/Charts";
import RecommendationBox from "../components/RecommendationBox";
import Leaderboard from "../components/Leaderboard";
import SustainabilityScore from "../components/SustainabilityScore";
import { useEffect, useState } from "react";
import { getCarbonData } from "../services/carbonService";
import TrendChart from "../components/TrendChart";
import EmissionHistory from "../components/EmissionHistory";
import CarbonPredictor from "../components/CarbonPredictor";
import ReportGenerator from "../components/ReportGenerator";
import { useTheme } from "../context/ThemeContext";
import AIInsights from "../components/AIInsights";


function Dashboard() {
    const { darkMode } = useTheme();
    const navigate = useNavigate();
    useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  }
}, [navigate]);

const [history, setHistory] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const data =
        await getCarbonData();

      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
  return (
    <div
  className={darkMode ? "dark" : ""}
  style={{
    display: "flex",
    background: darkMode
      ? "#121212"
      : "#f4f7fa",
  }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="dashboard-container">
          <DashboardCards />

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <Charts />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <RecommendationBox />

            <SustainabilityScore />
          </div>

          <div style={{ marginTop: "20px" }}>
            <Leaderboard />
            <div style={{ marginTop: "20px" }}>
           <CarbonPredictor />

           <div style={{ marginTop: "20px" }}>
           <AIInsights />
            </div>
            
             </div>
            <div style={{ marginTop: "20px" }}>
            <TrendChart history={history} />
             </div>

<div style={{ marginTop: "20px" }}>
  <EmissionHistory history={history} />
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
