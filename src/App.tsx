import React, { useState } from "react";

function App() {
  const colors = ["bg-red-300", "bg-green-300", "bg-blue-300", "bg-yellow-300"];

  // snap with scroll
  return (
    <div className="h-screen snap-both scroll-smooth snap-mandatory transition duration-500 overflow-y-auto">
      {colors.map((color) => {
        return (
          <div id={color} className={"h-screen snap-center " + color}>
            <div className="w-[50%] h-[50%]"></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
