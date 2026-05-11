function EmissionHistory({ history }) {
  return (
    <div className="card">
      <h2>Emission History</h2>

      <table
        width="100%"
        cellPadding="10"
      >
        <thead>
          <tr>
            <th>Total CO₂</th>
            <th>Electricity</th>
            <th>Fuel</th>
            <th>Transport</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>
                {item.totalEmission.toFixed(2)}
              </td>

              <td>
                {item.electricityEmission.toFixed(
                  2
                )}
              </td>

              <td>
                {item.fuelEmission.toFixed(2)}
              </td>

              <td>
                {item.transportEmission.toFixed(
                  2
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmissionHistory;