import React from "react";
import Button from "src/components/Button";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Bienvenue Yakout 💙</h1>
      <p className="text-lg text-gray-700 mt-4">Tu as bien lancé ton projet Ajin9raw 🚀</p>
      <Button label="Commencer" onClick={() => alert('Bienvenue !')} />

    </div>
    
  );
  <Footer />
}
