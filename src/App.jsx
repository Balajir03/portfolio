import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white relative overflow-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Pages */}
      <Home />

    </div>
  );
}

export default App;