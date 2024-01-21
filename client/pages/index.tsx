import Image from "next/image";
import { Inter } from "next/font/google";
import Tutorial from "@/components/tutorial";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="delete-div-after-tutorial">
        <NavBar />
        <Tutorial />;
      </div>
    </div>
  );
}
