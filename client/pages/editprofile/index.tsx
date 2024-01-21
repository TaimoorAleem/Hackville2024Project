import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Edit2, Image as ImageIcon } from "lucide-react";

export default function EditProfile() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen grid bg-gradient-to-r from-[#0040ad] to-[#0294c5] dark:from-black dark:to-black">
        <div className="flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-4xl border-2 border-white p-5 rounded-lg shadow-lg">
            <h2 className="text-center text-xl font-semibold mb-6 text-white">
              Edit Profile
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <ImageIcon className="h-20 w-20 text-gray-400" />
                </div>
                <div>
                  <Label htmlFor="profile-image" className="sr-only">
                    Profile image
                  </Label>
                  <Input
                    type="file"
                    id="profile-image"
                    name="profile-image"
                    accept="image/*"
                    className="block mx-auto text-sm text-white bg-transparent border-0 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="username" className="text-white">
                    Username
                  </Label>
                  <div className="flex items-center mt-1">
                    <span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-transparent text-sm text-white h-full">
                      <User className="h-7 w-5" />
                    </span>
                    <Input
                      type="text"
                      id="username"
                      className="rounded-r-md h-10 bg-transparent text-white shadow-md"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="flex items-center mt-1">
                    <span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-transparent text-sm text-white h-full">
                      <Mail className="h-7 w-5" />
                    </span>
                    <Input
                      type="email"
                      id="email"
                      className="rounded-r-md h-10 bg-transparent text-white shadow-md"
                    />
                  </div>
                </div>

              </div>
              
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="mx-auto flex justify-center items-center py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md"
                >
                  <Edit2 className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
