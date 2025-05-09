import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import CartContextProvider from "./context/GlobalStateContext";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tmag",
  description: "Online shop",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <CartContextProvider>
            <Header />
            {children}
            <Footer />
          </CartContextProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
