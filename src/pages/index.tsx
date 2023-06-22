import { Inter } from "next/font/google";
import { NavBar } from "../components/navBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <p>Componente 2</p>
    </div>
  );
}
