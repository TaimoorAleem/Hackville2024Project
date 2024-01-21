import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { Button } from "@/components/ui/button";

const users = [
  { id: 1, name: 'Alice', bio: 'Loves painting and outdoor activities.', photo: 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png' },
  { id: 2, name: 'Bob', bio: 'Enthusiastic about tech and music.', photo: 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg' },
  { id: 3, name: 'Charlie', bio: 'Passionate about literature and writing.', photo: 'https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg' },
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
      <div className="min-h-screen bg-gradient-to-r from-[#0040ad] to-[#0294c5] dark:from-black dark:to-black flex justify-center items-center p-4">
        <div className="w-full max-w-lg bg-cyan-600 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-white text-center">{users[currentCard].name}</h2>
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={users[currentCard].photo} alt={users[currentCard].name} className="object-cover max-h-48 w-auto" />
              </div>
              <div className="md:w-1/2 p-4">
                <p className='text-white'>{users[currentCard].bio}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly p-4 bg-cyan-600">
            <Button onClick={openDialog} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Add Friend
            </Button>
            <Button onClick={nextCard} className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Next
            </Button>
          </div>
        </div>
      </div>
      <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialog.Trigger asChild>
          <button className="hidden">Open</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <AlertDialog.Content className="fixed p-4 bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AlertDialog.Title>Add Friend</AlertDialog.Title>
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
