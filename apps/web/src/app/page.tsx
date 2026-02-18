export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Microfrontends POC</h1>
      <p>This is the default Next.js application (web).</p>
      <nav>
        <ul>
          <li>
            <a href="/">Home (Next.js)</a>
          </li>
          <li>
            <a href="/app">Dashboard (TanStack Start)</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
