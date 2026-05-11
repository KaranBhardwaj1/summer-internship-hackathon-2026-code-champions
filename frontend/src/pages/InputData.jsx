import { useState } from "react";
import { generateRecommendations } from "../utils/aiRecommendations";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";
import { calculateCarbonEmission } from "../utils/carbonCalculator";
import { saveCarbonData } from "../services/carbonService";

function InputData() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    electricityUsage: "",
    fuelUsage: "",
    transportUsage: "",
    foodWaste: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

 const handleCalculate = async () => {
  const emissionResult =
    calculateCarbonEmission(formData);

  const aiSuggestions =
    generateRecommendations(emissionResult);

  const finalData = {
    ...formData,
    ...emissionResult,
    recommendations: aiSuggestions,
  };

  setResult(finalData);

  localStorage.setItem(
    "carbonData",
    JSON.stringify(finalData)
  );

  try {
    await saveCarbonData(finalData);

    alert("Data Saved Successfully");
  } catch (error) {
    alert("Failed to Save Data");
  }
};

  return (
    
    <div className={darkMode ? "dark" : ""}
  style={{display: "flex", }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />
        

        <div className="container">
          <div className="card">
            <h2>Enter Carbon Data</h2>

            <input
              type="number"
              name="electricityUsage"
              placeholder="Electricity Usage (kWh)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="fuelUsage"
              placeholder="Fuel Usage (Liters)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="transportUsage"
              placeholder="Transport Usage (km)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="foodWaste"
              placeholder="Food Waste (kg)"
              onChange={handleChange}
            />

            <button onClick={handleCalculate}>
              Calculate Emission
            </button>
          </div>

          {result && (
            <div className="card">
              <h2>Carbon Emission Results</h2>

              <p>
                Electricity Emission:
                {" "}
                {result.electricityEmission.toFixed(2)} kg
              </p>

              <p>
                Fuel Emission:
                {" "}
                {result.fuelEmission.toFixed(2)} kg
              </p>

              <p>
                Transport Emission:
                {" "}
                {result.transportEmission.toFixed(2)} kg
              </p>

              <p>
                Food Waste Emission:
                {" "}
                {result.foodWasteEmission.toFixed(2)} kg
              </p>

              <h1>
                Total CO₂:
                <div style={{ marginTop: "20px" }}>
                <h2>AI Recommendations</h2>

                <ul>
                {result.recommendations.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
                </ul>
                </div>
                {" "}
                {result.totalEmission.toFixed(2)} kg
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputData;