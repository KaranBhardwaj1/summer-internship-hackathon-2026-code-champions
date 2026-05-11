import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function TrendChart({ history }) {
  const data = {
    labels: history.map((item, index) =>
      `Record ${index + 1}`
    ),

    datasets: [
      {
        label: "Total CO₂ Emission",
        data: history.map(
          (item) => item.totalEmission
        ),

        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card">
      <h2>Emission Trends</h2>

      <Line data={data} />
    </div>
  );
}

export default TrendChart;