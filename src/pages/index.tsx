import { Inter } from "next/font/google";
import { NavBar } from "../components/navBar/NavBar";
import { Footer } from "../components/footer/Footer";
import { PublContact } from "../components/PublContact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="p-12">otros componentes</div>
      <PublContact />
      <Footer />
    </div>
  );
}
