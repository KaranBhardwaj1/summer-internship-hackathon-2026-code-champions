function RecommendationBox() {
  const carbonData =
    JSON.parse(localStorage.getItem("carbonData"));

  return (
    <div className="card">
      <h2>AI Recommendations</h2>

      {carbonData?.recommendations ? (
        <ul>
          {carbonData.recommendations.map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      ) : (
        <p>No recommendations available</p>
      )}
    </div>
  );
}

export default RecommendationBox;