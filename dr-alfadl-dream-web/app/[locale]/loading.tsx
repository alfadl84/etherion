export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-gradient flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-gold-400/30 border-t-gold-400 animate-spin" />
        <p className="text-white/60 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
