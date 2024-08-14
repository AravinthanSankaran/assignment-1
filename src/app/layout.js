import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./component/Navigation";
import Sidebar from "./component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chai-code",
  description: "chai-code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Navigation />
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
