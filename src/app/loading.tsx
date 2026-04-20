import { MapPin } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <MapPin className="h-10 w-10 text-primary animate-bounce" />
      <p className="mt-4 text-sm text-muted">Loading...</p>
    </div>
  );
}
