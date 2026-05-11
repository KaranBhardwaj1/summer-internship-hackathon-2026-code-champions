const OpenAI =
  require("openai").default;

const client = new OpenAI({
  apiKey:
    process.env.GROQ_API_KEY,

  baseURL:
    "https://api.groq.com/openai/v1",
});

const generateAIInsights =
  async (req, res) => {

    try {

      console.log(
        "BODY:",
        req.body
      );

      const {
        electricityEmission,
        fuelEmission,
        transportEmission,
        totalEmission,
      } = req.body;

      const prompt = `
You are an AI industrial sustainability expert.

Analyze these emissions:

Electricity Emission:
${electricityEmission}

Fuel Emission:
${fuelEmission}

Transport Emission:
${transportEmission}

Total Emission:
${totalEmission}

Provide:
1. Carbon emission analysis
2. Industrial sustainability insights
3. Reduction strategies
4. ESG recommendations

Professional response only.
`;

      const completion =
        await client.chat.completions.create({
          model:
            "llama3-8b-8192",

          messages: [
            {
              role: "user",

              content: prompt,
            },
          ],

          temperature: 0.7,
        });

      const aiText =
        completion.choices[0]
          .message.content;

      res.json({
        insight: aiText,
      });

    } catch (error) {

      console.log(
        "GROQ ERROR:",
        error.response?.data ||
        error.message ||
        error
      );

      res.status(500).json({
        message:
          "AI generation failed",
      });
    }
  };

module.exports = {
  generateAIInsights,
};