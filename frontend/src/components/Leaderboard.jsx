function Leaderboard() {
  const departments = [
    {
      name: "Computer Science",
      score: "92%",
    },
    {
      name: "Mechanical",
      score: "81%",
    },
    {
      name: "Civil",
      score: "76%",
    },
  ];

  return (
    <div className="card">
      <h2>Green Leaderboard 🌱</h2>

      {departments.map((dept, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <span>{dept.name}</span>
          <strong>{dept.score}</strong>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;