import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main/Main";
// import Form from './components/Form/Form'
import { Results } from './components/Results/Results'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Main />
      <Results />
    </>
  );
}

export default App;
