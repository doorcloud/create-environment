
import React, { useState } from "react";
import { CreateEnvironment } from "@/components/environment/CreateEnvironment";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleClose = () => {
    setIsDialogOpen(false);
    console.log("Dialog closed");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8 flex flex-col items-center">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Environment Creator Demo</h1>
        <p className="text-gray-600 mb-6">Click the button below to open the environment creation dialog</p>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Create New Environment
        </Button>
      </div>
      
      {/* Popup dialog component that can be easily migrated to Angular */}
      <CreateEnvironment 
        isOpen={isDialogOpen} 
        onClose={handleClose} 
      />
      
      <div className="mt-8 text-center text-sm text-gray-500 max-w-lg">
        <p>
          This component is designed to be easily adaptable for Angular. The dialog component 
          encapsulates all its state and UI, making it simple to port to an Angular modal.
        </p>
      </div>
    </main>
  );
}
