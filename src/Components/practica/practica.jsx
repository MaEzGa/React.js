import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  
  const protectedChars = [65,69,73,79,85]; //a,e,i,o,u
  const onKeyPressed = (e) => {
    const isPressed = protectedChars.find(element => element == e.keyCode);
    if(isPressed) {
      e.preventDefault();
    }
  }

  useEffect(() => {
    window.addEventListener("onkeydown", onKeyPressed);
    return () => {
      window.removeEventListener("onkeydown", onKeyPressed, false);
    };
  }, []);

  return (
    <div>
      <input type="text" onKeyDown={onKeyPressed} />
    </div>
  );
}
console.log(App)