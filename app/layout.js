import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "ALOK PV | CSE Student | Full Stack Developer | Open Source Contributor",
  description:
    " I am Alok PV, a CSE student, Full Stack Developer, and Open Source Contributor. I am passionate about building products that solve real-world problems. I have experience in building web applications, mobile applications, and APIs. I am proficient in JavaScript, React, Node.js, Express.js, MongoDB, and Firebase. I am also familiar with Python, Django, Flask, and SQL. I have contributed to various open-source projects and have participated in hackathons and coding competitions. I am currently looking for internships and job opportunities in the field of software development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
