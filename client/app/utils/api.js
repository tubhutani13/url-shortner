import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const shortenUrl = async (originalUrl) => {
  try {
    const response = await api.post("/links", { original_url: originalUrl });
    return response.data;
  } catch (error) {
    console.error("Error shortening URL", error);
    throw error;
  }
};
