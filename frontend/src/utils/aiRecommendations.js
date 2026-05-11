export const generateRecommendations = (data) => {
  let recommendations = [];

  if (data.electricityEmission > 300) {
    recommendations.push(
      "High electricity usage detected. Consider solar panels and smart lighting systems."
    );
  }

  if (data.fuelEmission > 200) {
    recommendations.push(
      "Fuel emissions are high. Shift to electric or hybrid vehicles."
    );
  }

  if (data.transportEmission > 100) {
    recommendations.push(
      "Optimize transportation routes and encourage carpooling."
    );
  }

  if (data.foodWasteEmission > 50) {
    recommendations.push(
      "Food waste is excessive. Implement recycling and compost management."
    );
  }

  if (recommendations.length === 0) {
    recommendations.push(
      "Great job! Your emissions are within sustainable limits."
    );
  }

  return recommendations;
};