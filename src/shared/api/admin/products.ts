import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.SERVER_URI; // Adjust this based on your backend endpoint

// Axios instance (Optional, for better request handling)
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch products
export const fetchProducts = async () => {
  const response = await apiClient.get("/");
  return response.data;
};

// React Query hook for fetching products
export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["adminProducts"],
    queryFn: fetchProducts,
  });
};
