import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Hello from TanStack Start 🚀</h1>
      <p>
        This is the child microfrontend, mounted at <code>/app</code>.
      </p>
    </div>
  );
}
