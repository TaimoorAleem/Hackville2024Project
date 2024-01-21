import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCircle, Key, CheckCircle2 } from "lucide-react"; 
import Link from "next/link";


export default function Register() {
  return (
    <div className="min-h-screen grid bg-gradient-to-r from-[#0040ad] to-[#0294c5] dark:from-black dark:to-black">
      <div className="flex flex-col items-center justify-center p-8 space-y-6">
        <div className="w-full max-w-md border-2 border-white p-5 rounded-lg shadow-lg">
          <h2 className="text-center text-xl font-semibold mb-6 text-white">
            Register
          </h2>
          <form className="grid gap-6">
            <div>
              <Label htmlFor="username" className="text-white">
                Email
              </Label>
              <div className="flex items-center mt-1 text-white">
                <span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-transparent text-sm text-white h-full">
                  <UserCircle className="h-7 w-5" />
                </span>{" "}
                <Input
                  type="email"
                  id="username"
                  className="rounded-r-md h-10 bg-transparent text-white shadow-md"
                />{" "}
              </div>{" "}
            </div>
            <div>
              <Label htmlFor="password" className="text-white">
                Create Password
              </Label>
              <div className="flex items-center mt-1">
                <span className="inline-flex items-center px-3 rounded-l-md  border-r-0 border-gray-300 bg-transparent text-sm text-white dark:border-gray-600 dark:bg-gray-700">
                  <Key className="h-7 w-5" />
                </span>
                <Input
                  type="password"
                  id="password"
                  className="rounded-r-md h-10 bg-transparent placeholder-gray-400 shadow-md"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p>
                <span className="text-white">Already have an account?</span>
                <br />
                <a href="/login" className="text-cyan-400 hover:underline cursor-pointer transition duration-300 ease-in-out">
                  Login instead
                </a>
              </p>
            </div>
            <Link href="/findfriends" className="text-center" passHref>
              <Button 
                type="submit"
                className= "bg-transparent mt-2 border-cyan-400 border-2 rounded-3xl text-white text-xl p-6 font-semibold hover:bg-cyan-400 mx-auto"
                style={{ 
                  boxShadow: '0 2px 15px rgba(8, 145, 178, 0.8)',
                }}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Register
              </Button>
            </Link>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}