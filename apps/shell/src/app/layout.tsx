import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microfrontends POC - Shell",
  description: "Host shell for microfrontends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", display: "flex", gap: "1rem" }}>
          <a href="/">Shell (Home)</a>
          <a href="/app">TanStack App</a>
        </nav>
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
