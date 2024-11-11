// import { useState } from "react";

import "./App.css";
import MainPage from "./pages/mainPage";
import Navigation from "./components/navigation";
import Thumbs from "./components/thumbs";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <MainPage />
      <Navigation />
      <Thumbs />
    </>
  );
}

export default App;
