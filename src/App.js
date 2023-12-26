import "./App.css";
import React, { useState } from "react";
import DataDisplay from "./component/DataDisplay";
import ButtonContainer from "./component/ButtonContainer";
import {
  insertionSort,
  selectionSort,
  bubbleSort,
  performMergeSort,
  performQuickSort,
  performShellSort,
} from "./component/sortingAlgo";

function App() {
  // Usestate for setting the random and sorted numbers
  const [data, setRandomNumbers] = useState(generateRandomNumbers());
  // Usestate for checking the width change; initial width 30 on change 15
  const [startingWidth, setWidth] = useState(30);

  // function to check the toggle
  const shrinkWidth = () => {
    setWidth((prevWidth) => (prevWidth === 30 ? 15 : 30));
  };

  // generating random numbers between 1-100, and array size with 20
  function generateRandomNumbers() {
    const min = 1;
    const max = 100;
    const count = 20;
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  }
  // Function to call on random generator button
  const handleRandomFunction = () => {
    const newRandomNumbers = generateRandomNumbers();
    console.log(data);
    setRandomNumbers(newRandomNumbers);
  };

  // Checking the button pressed
  const buttonHandler = (value) => {
    switch (value) {
      case 0:
        handleRandomFunction();
        break;
      case 1:
        setRandomNumbers(insertionSort(data));
        console.log("insertion");
        break;
      case 2:
        setRandomNumbers(selectionSort(data));
        console.log("selection");
        break;
      case 3:
        setRandomNumbers(bubbleSort(data));
        console.log("bubble");
        break;
      case 4:
        setRandomNumbers(performQuickSort(data));
        console.log("quick sort");
        break;
      case 5:
        setRandomNumbers(performMergeSort(data));
        console.log("merge");
        break;
      case 6:
        setRandomNumbers(performShellSort(data));
        console.log("shell");
        break;
      case 7:
        shrinkWidth();
        console.log("Width change");
        break;
      default:
        console.log("other sort");
        break;
    }
  };

  return (
    <>
      <div>
        <h1 className="header">Comparison Sorting Algorithm</h1>
      </div>
      <ButtonContainer handleRandom={buttonHandler}></ButtonContainer>
      <DataDisplay numbers={data} widthShrink={startingWidth}></DataDisplay>
    </>
  );
}

export default App;
