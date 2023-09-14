import React from "react";
import "./member_mouse.css";
import { useState } from "react";

export default function AppXY() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const xyHandler = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setXY({ x: mouseX, y: mouseY });
  };

  return (
    <div
      onMouseMove={xyHandler}
      className="pointer"
      style={{
        transform: `translate(${xy.x}px, ${xy.y}px)`,
      }}
    />
  );
}
