import { useState } from "react";

function CarbonPredictor() {
  const carbonData =
    JSON.parse(localStorage.getItem("carbonData"));

  const [electricityReduction, setElectricityReduction] =
    useState(0);

  const [fuelReduction, setFuelReduction] =
    useState(0);

  const predictReduction = () => {
    if (!carbonData) return 0;

    const electricitySaved =
      carbonData.electricityEmission *
      (electricityReduction / 100);

    const fuelSaved =
      carbonData.fuelEmission *
      (fuelReduction / 100);

    return (
      electricitySaved + fuelSaved
    ).toFixed(2);
  };

  const predictedReduction =
    predictReduction();

  return (
    <div className="card">
      <h2>AI Carbon Reduction Predictor</h2>

      <div style={{ marginTop: "20px" }}>
        <label>
          Electricity Reduction (%)
        </label>

        <input
          type="range"
          min="0"
          max="100"
          value={electricityReduction}
          onChange={(e) =>
            setElectricityReduction(
              e.target.value
            )
          }
        />

        <p>{electricityReduction}%</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>
          Fuel Reduction (%)
        </label>

        <input
          type="range"
          min="0"
          max="100"
          value={fuelReduction}
          onChange={(e) =>
            setFuelReduction(
              e.target.value
            )
          }
        />

        <p>{fuelReduction}%</p>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#e8f5e9",
          borderRadius: "10px",
        }}
      >
        <h3>
          Predicted CO₂ Reduction:
        </h3>

        <h1>
          {predictedReduction} kg
        </h1>
      </div>
    </div>
  );
}

export default CarbonPredictor;