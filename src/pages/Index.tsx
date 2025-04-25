import React from "react";
import { CreateEnvironment } from "@/components/environment/CreateEnvironment";

export default function Index() {
  const handleClose = () => {
    console.log("Close clicked");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <CreateEnvironment onClose={handleClose} />
    </main>
  );
}
