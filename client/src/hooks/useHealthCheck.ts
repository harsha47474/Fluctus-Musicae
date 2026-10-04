import { useEffect, useState } from "react";
import { fetchHealthStatus } from "../services/healthService";
import type { HealthCheckData } from "../services/healthService";

// Describes what this hook gives back to the component that uses it.
interface UseHealthCheckResult {
  healthData: HealthCheckData | null;
  isLoading: boolean;
  errorMessage: string | null;
}

// Custom hook that fetches the server health status once when the component mounts.
// Separating the data-fetching logic from the display component keeps both files small
// and makes the fetching logic easy to reuse or test on its own.
export function useHealthCheck(): UseHealthCheckResult {
  const [healthData, setHealthData] = useState<HealthCheckData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Immediately invoked async function inside useEffect —
    // the standard pattern for async calls in hooks.
    async function loadHealthData(): Promise<void> {
      try {
        const response = await fetchHealthStatus();
        setHealthData(response.data);
      } catch {
        setErrorMessage("Could not reach the server. Is it running?");
      } finally {
        setIsLoading(false);
      }
    }

    loadHealthData();
  }, []); // Empty array: run only once when the component first renders

  return { healthData, isLoading, errorMessage };
}
