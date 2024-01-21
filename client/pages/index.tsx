import { Inter } from "next/font/google";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#0040ad] to-[#0294c5]">
      <h2 className="subtitle text-xl font-medium text-white dark:text-gray-300 mb-6">
        Welcome to
      </h2>
      <h1 className="title text-8xl font-bold text-white dark:text-white mb-16">
        Buddy Finder
      </h1>
      <Link href="/login" passHref>
        <Button 
        className="bg-cyan-500 border-cyan-400 border-2 bg-transparent rounded-3xl text-white text-xl p-6 font-semibold hover:bg-cyan-400"
        style={{ 
          boxShadow: '0 2px 15px rgba(8, 145, 178, 0.8)',
        }}>Login</Button>
      </Link>
      <h5 className="text-white mt-14 text-sm text-center">Front End Designed and Developed by:</h5>
      <h5 className="text-cyan-400 mt-4">Muhammad Taimoor Aleem</h5>
    </div>
  )
}
