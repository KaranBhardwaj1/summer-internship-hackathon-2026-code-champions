export const calculateCarbonEmission = (data) => {
  const electricityFactor = 0.85;
  const fuelFactor = 2.3;
  const transportFactor = 0.21;
  const foodWasteFactor = 0.45;

  const electricityEmission =
    data.electricityUsage * electricityFactor;

  const fuelEmission =
    data.fuelUsage * fuelFactor;

  const transportEmission =
    data.transportUsage * transportFactor;

  const foodWasteEmission =
    data.foodWaste * foodWasteFactor;

  const totalEmission =
    electricityEmission +
    fuelEmission +
    transportEmission +
    foodWasteEmission;

  return {
    electricityEmission,
    fuelEmission,
    transportEmission,
    foodWasteEmission,
    totalEmission,
  };
};