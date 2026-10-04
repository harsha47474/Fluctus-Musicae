import { useHealthCheck } from "../hooks/useHealthCheck";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import { StatusBadge } from "../components/common/StatusBadge";

// The health check page.
// Its only job is to assemble the components and pass them data from the hook.
// No fetching logic or markup heavy enough to count as business logic lives here.
export function HealthCheckPage() {
  const { healthData, isLoading, errorMessage } = useHealthCheck();

  return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* App name / branding */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-1">
            Fluct<span className="text-violet-400">ūs</span>
          </h1>
          <p className="text-white/40 text-sm tracking-widest uppercase">
            System Health
          </p>
        </div>

        {/* Status card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
          {isLoading && (
            <div className="flex justify-center py-8">
              <LoadingSpinner />
            </div>
          )}

          {errorMessage && (
            <div className="text-center py-8">
              <p className="text-red-400 font-mono text-sm">{errorMessage}</p>
              <p className="text-white/30 text-xs mt-2">
                Make sure the server is running on port 5000.
              </p>
            </div>
          )}

          {healthData && (
            <div className="flex flex-col gap-1">
              <StatusBadge
                label="Server"
                value={healthData.status}
                status={healthData.status === "ok" ? "ok" : "error"}
              />
              <StatusBadge
                label="Database"
                value={healthData.database}
                status={healthData.database === "connected" ? "ok" : "error"}
              />
              <StatusBadge
                label="Timestamp"
                value={new Date(healthData.timestamp).toLocaleTimeString()}
                status="ok"
              />
            </div>
          )}
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Step 1 — Foundation complete
        </p>
      </div>
    </main>
  );
}
