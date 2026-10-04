import axios from "axios";

// A single Axios instance used by every service in the app.
// Centralising it here means we only need to change the base URL
// or cookie setting in one place.
//
// withCredentials: true — tells the browser to send our HTTP-only JWT cookie
// on every request, even across origins (http://localhost:5173 -> :5000).
// Without this, the cookie is silently dropped and every request appears unauthenticated.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
