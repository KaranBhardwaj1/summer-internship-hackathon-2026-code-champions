import { motion } from "framer-motion";
function DashboardCards() {
  const carbonData =
    JSON.parse(localStorage.getItem("carbonData"));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
      }}
    >
      <motion.div
  className="card"
  whileHover={{
    scale: 1.03,
  }}
>
        <h3>Total CO₂ Emission</h3>

        <h1>
          {carbonData
            ? carbonData.totalEmission.toFixed(2)
            : 0}
          {" "}kg
        </h1>
      </motion.div>

      <motion.div
  className="card"
  whileHover={{
    scale: 1.03,
  }}
>
        <h3>Electricity Emission</h3>

        <h1>
          {carbonData
            ? carbonData.electricityEmission.toFixed(2)
            : 0}
          {" "}kg
        </h1>
      </motion.div>

      <motion.div
  className="card"
  whileHover={{
    scale: 1.03,
  }}
>
        <h3>Fuel Emission</h3>

        <h1>
          {carbonData
            ? carbonData.fuelEmission.toFixed(2)
            : 0}
          {" "}kg
        </h1>
      </motion.div>

      <motion.div
  className="card"
  whileHover={{
    scale: 1.03,
  }}
>
        <h3>Transport Emission</h3>

        <h1>
          {carbonData
            ? carbonData.transportEmission.toFixed(2)
            : 0}
          {" "}kg
        </h1>
      </motion.div>
    </div>
  );
}

export default DashboardCards;