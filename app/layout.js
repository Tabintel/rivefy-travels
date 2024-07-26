import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import "react-loading-skeleton/dist/skeleton.css";
// import "react-day-picker/src/style.css";
import "react-day-picker/style.css";
export const metadata = {
  title: "Docscan",
  description:
    "Integrating the Docscan NSFW API into a Go application to filter image uploads based on their NSFW score.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
