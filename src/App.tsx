import { useState, useEffect } from "react";

import Box from "./components/Box";
import Button from "./components/Button";

import "./App.css";

function App() {
  const [test, setTest] = useState<string>("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const arr = ["1", "2", "3"];

  function randomize() {
    const randomInx = arr[Math.floor(Math.random() * arr.length)];
    return randomInx;
  }

  function handleClick(answer: string) {
    if (answer == test) {
      console.log("yay");
      setIsLoading(true);
      setTimeout(() => {
        setTest(randomize());
        setIsLoading(false);
      }, 1000);
    } else {
      console.log("nah");
      setError(true);
      setTimeout(() => {
        setTest(randomize());
        setError(false);
      }, 1000);
    }
  }

  useEffect(() => {
    setTest(randomize());
  }, []);

  if (isLoading) return <h1>Correct! Loading...</h1>;
  if (error) return <h1>Wrong answer! Loading...</h1>;

  return (
    <div className="App">
      <div className="box-wrapper">
        <h1 className="prompt">Click the correct number.</h1>
        <Box text={test} />
      </div>
      <div className="button-wrapper">
        {arr.map((choice) => {
          return (
            <Button
              data={choice}
              onClick={() => handleClick(choice)}
              key={choice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
