import apiClient from "../lib/apiClient";

// Describes the shape of data that the server sends back for the health check.
export interface HealthCheckData {
  status: string;
  timestamp: string;
  database: string;
}

// Describes the full response shape from our server.
export interface HealthCheckResponse {
  success: boolean;
  message: string;
  data: HealthCheckData;
}

// Calls the server health endpoint and returns the result.
// If the request fails, Axios throws an error which the calling component handles.
export async function fetchHealthStatus(): Promise<HealthCheckResponse> {
  const response = await apiClient.get<HealthCheckResponse>("/health");
  return response.data;
}
