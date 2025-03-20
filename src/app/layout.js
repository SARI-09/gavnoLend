import Header from "@/components/sections/Header";
import "./globals.css";
import Footer from "@/components/sections/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
