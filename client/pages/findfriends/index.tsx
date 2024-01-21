import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const users = [
  { 
    id: 1, 
    name: 'Alice', 
    bio: 'Loves painting and outdoor activities. Enjoys hiking in the mountains and is an avid landscape painter. Always looking for new creative challenges and adventures.', 
    photo: 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png' 
  },
  { 
    id: 2, 
    name: 'Bob', 
    bio: 'Enthusiastic about tech and music. Software developer by day, guitarist by night. Loves exploring the latest in technology and attending music festivals.', 
    photo: 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg' 
  },
  { 
    id: 3, 
    name: 'Lisa', 
    bio: 'Passionate about literature and writing. An aspiring author who enjoys reading historical fiction and poetry. Volunteers at the local library and participates in writing workshops.', 
    photo: 'https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg' 
  },
];


export default function FindFriends() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % users.length);
  };

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-r from-[#0040ad] to-[#0040ad] dark:from-black dark:to-black flex justify-center items-center p-4">
        <div className="flex items-center">
          {/* Card */}
          <div className="w-full max-w-xl bg-blue-500 rounded-lg overflow-hidden shadow-xl p-8">
            <h2 className="text-xl font-semibold mb-4 text-white text-center">{users[currentCard].name}</h2>
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={users[currentCard].photo} alt={users[currentCard].name} className="object-cover max-h-48 w-auto rounded-full" />
              </div>
              <div className="md:w-1/2 p-4">
                <p className='text-white'>{users[currentCard].bio}</p>
              </div>
            </div>
            <div className="flex justify-evenly p-4">
              <Button onClick={openDialog} className="bg-transparent border-cyan-400 border-2 font-semibold hover:bg-cyan-400 text-white px-4 py-2 rounded-3xl">
                Add Friend
              </Button>
            </div>
          </div>
          <button onClick={nextCard} 
                  className="ml-4 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg"
                  aria-label="Next">
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      </div>
      <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialog.Trigger asChild>
          <button className="hidden">Open</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <AlertDialog.Content className="fixed p-6 bg-blue-600 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AlertDialog.Description>
              Do you want to add {users[currentCard].name} as your friend?
            </AlertDialog.Description>
            <div className="flex justify-end space-x-2 mt-4">
              <AlertDialog.Cancel asChild>
                <Button onClick={closeDialog}>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button onClick={closeDialog}>Yes, Add</Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
}
