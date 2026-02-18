import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/")({
  component: AppIndex,
});

function AppIndex() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Dashboard</h1>
      <p>This is the TanStack Start microfrontend, mounted at /app.</p>
      <nav>
        <ul>
          <li>
            <a href="/">Home (Next.js)</a>
          </li>
          <li>
            <a href="/app/settings">Settings</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
