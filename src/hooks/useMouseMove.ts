import { useState } from "react";

export function useMouseMove() {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  try {
    window.addEventListener("mousemove", (e) => {
      if (e.clientX !== cursorPosition.x) {
        setCursorPosition({ ...cursorPosition, x: e.clientX });
      }

      if (e.clientY !== cursorPosition.y) {
        setCursorPosition({ ...cursorPosition, y: e.clientY });
      }
    });
  } catch (error: any) {
    console.log(error.message);
  }

  return { x: cursorPosition.x, y: cursorPosition.y };
}
