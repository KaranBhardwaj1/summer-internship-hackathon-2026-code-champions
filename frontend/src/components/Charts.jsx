import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Charts() {
  const carbonData =
    JSON.parse(localStorage.getItem("carbonData"));

  const pieData = {
    labels: [
      "Electricity",
      "Fuel",
      "Transport",
      "Food Waste",
    ],

    datasets: [
      {
        data: carbonData
          ? [
              carbonData.electricityEmission,
              carbonData.fuelEmission,
              carbonData.transportEmission,
              carbonData.foodWasteEmission,
            ]
          : [0, 0, 0, 0],
      },
    ],
  };

  const barData = {
    labels: [
      "Electricity",
      "Fuel",
      "Transport",
      "Food Waste",
    ],

    datasets: [
      {
        label: "CO₂ Emissions",
        data: carbonData
          ? [
              carbonData.electricityEmission,
              carbonData.fuelEmission,
              carbonData.transportEmission,
              carbonData.foodWasteEmission,
            ]
          : [0, 0, 0, 0],
      },
    ],
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <div className="card">
        <h2>Emission Distribution</h2>

        <Pie data={pieData} />
      </div>

      <div className="card">
        <h2>Emission Analytics</h2>

        <Bar data={barData} />
      </div>
    </div>
  );
}

export default Charts;