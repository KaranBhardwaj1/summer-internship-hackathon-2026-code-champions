function SustainabilityScore() {
  const carbonData =
    JSON.parse(localStorage.getItem("carbonData"));

  const total =
    carbonData?.totalEmission || 0;

  let score = 100;

  if (total > 1000) score = 40;
  else if (total > 700) score = 60;
  else if (total > 400) score = 75;
  else score = 90;

  return (
    <div className="card">
      <h2>Sustainability Score</h2>

      <h1>{score}%</h1>

      <p>
        {score > 80
          ? "Excellent Sustainability"
          : score > 60
          ? "Moderate Sustainability"
          : "High Carbon Impact"}
      </p>
    </div>
  );
}

export default SustainabilityScore;