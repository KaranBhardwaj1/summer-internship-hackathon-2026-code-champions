import {
  useEffect,
  useState,
} from "react";

import {
  generateAIInsights,
} from "../services/aiService";

function AIInsights() {

  const carbonData =
    JSON.parse(
      localStorage.getItem(
        "carbonData"
      )
    );

  const [insight, setInsight] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadAIInsights =
      async () => {

        try {

          const data =
            await generateAIInsights(
              carbonData
            );

          setInsight(
            data.insight
          );

        } catch (error) {

          console.log(error);

          // FALLBACK AI
          const total =
            carbonData?.totalEmission || 0;

          let analysis = "";

          if (total < 200) {

            analysis = `
✅ Low Carbon Footprint

• Your industry is operating efficiently.
• Energy optimization is good.
• Continue renewable adoption.
• Maintain sustainability monitoring.
`;

          } else if (
            total < 500
          ) {

            analysis = `
⚠ Moderate Carbon Emissions

• Industrial energy usage is increasing.
• Optimize electricity consumption.
• Reduce fuel dependency.
• Introduce smart energy systems.
`;

          } else {

            analysis = `
🚨 High Industrial Emissions Detected

• Immediate carbon reduction required.
• Fuel emissions are critically high.
• Renewable energy adoption recommended.
• Install smart industrial monitoring systems.
• Implement ESG sustainability practices.
`;
          }

          setInsight(
            analysis
          );

        } finally {

          setLoading(false);

        }
      };

    loadAIInsights();

  }, []);

  return (
    <div className="card">

      <h2>
        AI Sustainability Analysis
      </h2>

      {loading ? (
        <p>
          Generating AI Insights...
        </p>
      ) : (
        <div
          style={{
            marginTop: "20px",
            whiteSpace:
              "pre-wrap",
            lineHeight: "1.7",
          }}
        >
          {insight}
        </div>
      )}
    </div>
  );
}

export default AIInsights;