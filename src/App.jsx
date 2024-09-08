import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main/Main";
// import Form from './components/Form/Form'
import { Results } from "./components/Results/Results";
function App() {
  // const [count, setCount] = useState(0)

  const [subject, setSubject] = useState();
  const [subModule, setSubModule] = useState();
  const [duration, setDuration] = useState();
  const [grade, setGrade] = useState();

  return (
    <>
      <Main
        setSubject={setSubject}
        setSubModule={setSubModule}
        setDuration={setDuration}
        setGrade={setGrade}
      />
      <Results
        subject={subject}
        subModule={subModule}
        duration={duration}
        grade={grade}
      />
    </>
  );
}

export default App;
