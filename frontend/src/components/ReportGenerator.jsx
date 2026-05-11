import jsPDF from "jspdf";

function ReportGenerator() {
  const carbonData =
    JSON.parse(localStorage.getItem("carbonData"));

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "CarbonIQ Sustainability Report",
      20,
      20
    );

    doc.setFontSize(14);

    doc.text(
      `Total CO₂ Emission: ${
        carbonData?.totalEmission?.toFixed(2) || 0
      } kg`,
      20,
      50
    );

    doc.text(
      `Electricity Emission: ${
        carbonData?.electricityEmission?.toFixed(
          2
        ) || 0
      } kg`,
      20,
      70
    );

    doc.text(
      `Fuel Emission: ${
        carbonData?.fuelEmission?.toFixed(
          2
        ) || 0
      } kg`,
      20,
      90
    );

    doc.text(
      `Transport Emission: ${
        carbonData?.transportEmission?.toFixed(
          2
        ) || 0
      } kg`,
      20,
      110
    );

    doc.text(
      `Food Waste Emission: ${
        carbonData?.foodWasteEmission?.toFixed(
          2
        ) || 0
      } kg`,
      20,
      130
    );

    doc.text(
      "AI Recommendations:",
      20,
      160
    );

    carbonData?.recommendations?.forEach(
      (item, index) => {
        doc.text(
          `• ${item}`,
          25,
          180 + index * 10
        );
      }
    );

    doc.save("CarbonIQ_Report.pdf");
  };

  return (
    <div className="card">
      <h2>Generate Sustainability Report</h2>

      <button
        onClick={generatePDF}
        style={{ marginTop: "20px" }}
      >
        Download PDF Report
      </button>
    </div>
  );
}

export default ReportGenerator;