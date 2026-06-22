import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function GoogleCallback() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const state = params.get("state");
    const error = params.get("error");

    if (error) {
      window.location.href = `http://localhost:5173/leadai-dashboard?tab=integrations&gmail_error=${error}`;
      return;
    }

    if (code && state) {
      // Forward the browser to the backend callback handler
      window.location.href = `http://localhost:3000/api/gmail/callback?code=${code}&state=${state}`;
    } else {
      window.location.href = "http://localhost:5173/leadai-dashboard?tab=integrations&gmail_error=missing_params";
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center text-slate-800 space-y-4">
      <Loader2 className="w-8 h-8 animate-spin text-sky-600" />
      <p className="text-xs font-mono text-slate-500">Connecting your Google Account...</p>
    </div>
  );
}
