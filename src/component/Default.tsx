import React from "react";

const Default = () => {
  const colors = ["bg-red-300", "bg-green-300", "bg-blue-300", "bg-yellow-300"];
  return (
    <div className="h-screen snap-both scroll-smooth snap-mandatory overflow-y-auto">
      {colors.map((color) => {
        return (
          <div id={color} className={"h-screen snap-center " + color}></div>
        );
      })}
    </div>
  );
};

export default Default;
