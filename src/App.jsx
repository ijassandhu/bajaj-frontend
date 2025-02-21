import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bfhl from "./bfhl/Bfhl";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bfhl />
    </>
  );
}

export default App;
