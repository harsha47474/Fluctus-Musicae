// A centred, animated spinner shown while data is being fetched.
// Having it in its own file means we can reuse it on every loading screen.
export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-4 border-white/20 border-t-violet-400 animate-spin" />
      <p className="text-white/50 text-sm tracking-widest uppercase">Connecting…</p>
    </div>
  );
}
