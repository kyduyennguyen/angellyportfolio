import "./globals.css";

export const metadata = {
  title: "Angelly Nguyen | Software Developer",
  description:
    "Angelly Nguyen is a software developer building modern web experiences with a focus on clean UI and UX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
