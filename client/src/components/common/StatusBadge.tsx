interface StatusBadgeProps {
  label: string;
  value: string;
  // "ok" shows green, "error" shows red, anything else shows yellow.
  status: "ok" | "error" | "unknown";
}

// Displays a single key-value status line with a colour-coded dot.
// Used on the health page to show database status, server status, etc.
export function StatusBadge({ label, value, status }: StatusBadgeProps) {
  const dotColour =
    status === "ok"
      ? "bg-emerald-400"
      : status === "error"
        ? "bg-red-400"
        : "bg-yellow-400";

  return (
    <div className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
      <span className="text-sm text-white/60 uppercase tracking-widest">{label}</span>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${dotColour} animate-pulse`} />
        <span className="text-sm font-mono text-white">{value}</span>
      </div>
    </div>
  );
}
