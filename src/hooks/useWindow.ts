import { useState } from "react";

export function useWindow() {
  const [windowPosition, setWindowPosition] = useState({
    width: 0,
    heigth: 0,
  });

  try {
    if (document.querySelector("body")?.clientWidth !== windowPosition.width) {
      setWindowPosition({
        ...windowPosition,
        width: document.querySelector("body")?.clientWidth!,
      });
    }

    if (
      document.querySelector("body")?.clientHeight !== windowPosition.heigth
    ) {
      setWindowPosition({
        ...windowPosition,
        heigth: document.querySelector("body")?.clientHeight!,
      });
    }
  } catch (error: any) {
    console.log(error.message);
  }

  return { width: windowPosition.width, height: windowPosition.heigth };
}
