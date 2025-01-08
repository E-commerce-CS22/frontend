import axios from "axios";
export * from "./";

export const apiClient = axios.create({
  baseURL: process.env.SERVER_URI || "http://127.0.0.1:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
