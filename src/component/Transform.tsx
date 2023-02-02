import React, { useEffect, useMemo, useState } from "react";

const Transform = () => {
  const colors = ["bg-red-300", "bg-green-300", "bg-blue-300", "bg-yellow-300"];

  const [position, setPotition] = useState(0);
  const translate = useMemo(
    () => `translate3d(0px, ${position}vh, 0px)`,
    [position]
  );

  useEffect(() => {
    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        // scroll down
        if (e.deltaY > 0) {
          setPotition((prev) => {
            return prev === -300 ? -300 : prev - 100;
          });
        }
        // scroll up
        else {
          setPotition((prev) => {
            return prev === 0 ? 0 : prev + 100;
          });
        }
      },
      { passive: false }
    );

    return () => {
      window.removeEventListener("wheel", () => {});
    };
  }, []);

  return (
    <div
      id="container"
      style={{
        height: "100%",
        position: "relative",
        touchAction: "none",
        transform: translate,
        transition: "all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      }}
    >
      {colors.map((color) => {
        return <div id={color} className={"h-screen " + color}></div>;
      })}
    </div>
  );
};

export default Transform;
