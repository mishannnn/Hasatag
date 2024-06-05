import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/reduxProvider";
ReduxProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HasaTag",
  description: "Create your tags",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        {children}
      <Toaster/>
      </ReduxProvider>
      </body>
     
    </html>
  );
}
