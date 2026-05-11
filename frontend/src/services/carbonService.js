import API from "./api";

export const saveCarbonData = async (
  carbonData
) => {
  const token =
    localStorage.getItem("token");

  const response = await API.post(
    "/carbon",
    carbonData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


export const getCarbonData = async () => {
  const token =
    localStorage.getItem("token");

  const response = await API.get(
    "/carbon",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};