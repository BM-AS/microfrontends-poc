import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/settings")({
  component: Settings,
});

function Settings() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Settings</h1>
      <p>A nested route under /app in the TanStack Start microfrontend.</p>
      <a href="/app">← Back to Dashboard</a>
    </main>
  );
}
