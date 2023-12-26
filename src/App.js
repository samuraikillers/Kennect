import './App.css';
import React, { useState } from "react";
import RandomArray from './component/RandomArrays';
import ButtonContainer from './component/ButtonContainer';
import {
  insertionSort,
  selectionSort,
  bubbleSort,
  performMergeSort,
  performQuickSort,
  performShellSort,
} from "./component/sortingAlgo";

function App() {
const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers());
  const [startingWidth, setWidth] = useState(30);

  const shrinkWidth = () => {
    setWidth((prevWidth) => (prevWidth === 30 ? 15 : 30));
  };
  
function generateRandomNumbers() {
  const min = 1;
  const max = 100;
  const count = 20;
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
  const buttonHandler = (value) => {
    switch (value) {
      case 0:
        handleRandomFunction();
        break;
      case 1:
        setRandomNumbers(insertionSort(randomNumbers));
        console.log("insertion");
        break;
      case 2:
        setRandomNumbers(selectionSort(randomNumbers));
        console.log("selection");
        break;
      case 3:
        setRandomNumbers(bubbleSort(randomNumbers));
        console.log("bubble");
        break;
      case 4:
        setRandomNumbers(performQuickSort(randomNumbers));
        console.log("quick sort");
        break;
      case 5:
        setRandomNumbers(performMergeSort(randomNumbers));
        console.log("merge");
        break;
      case 6:
        setRandomNumbers(performShellSort(randomNumbers));
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
  }
   

// const shrinkWidth = () => {
//   setWidth(() => {
//     switchWidth = !switchWidth;
//     console.log(switchWidth,startingWidth);
//     if (switchWidth) return 30;
//     else return 15;
//   });
// };

   const handleRandomFunction = () => {
     const newRandomNumbers = generateRandomNumbers();
     console.log(randomNumbers);
     setRandomNumbers(newRandomNumbers);
   };
  // // const numbers = [10, 100, 77, 40, 50, 60, 70, 80, 90, 100];
  // const min = 1;
  // const max = 100;
  // const count = 20;

  // const randomNumbers = Array.from(
  //   { length: count },
  //   () => Math.floor(Math.random() * (max - min + 1)) + min
  // );

  return (
    <>
      <div>
        <h1 className="header">Comparison Sorting Algorithm</h1>
      </div>
      <ButtonContainer handleRandom={buttonHandler}></ButtonContainer>
      <RandomArray
        numbers={randomNumbers}
        widthShrink={startingWidth}
      ></RandomArray>
    </>
  );
}

export default App;
