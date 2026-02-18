import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microfrontends POC — Web",
  description: "Default Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
