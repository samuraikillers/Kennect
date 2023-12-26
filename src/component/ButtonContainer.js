import "./ButtonContainer.css"; 

function ButtonContainer({ handleRandom }) {
 // passing the value of button clicked, passing to App.js file
  const handleButtonClick = (buttonNumber) => {
   handleRandom(buttonNumber);
  };
  
  // creating button
  return (
    <div className="container">
      <button className="button" onClick={() => handleButtonClick(0)}>
        Randomize array
      </button>
      <button className="button" onClick={() => handleButtonClick(1)}>
        Insertion sort
      </button>
      <button className="button" onClick={() => handleButtonClick(2)}>
        Selection sort
      </button>
      <button className="button" onClick={() => handleButtonClick(3)}>
        Bubble sort
      </button>
      <button className="button" onClick={() => handleButtonClick(4)}>
        Quick sort
      </button>
      <button className="button" onClick={() => handleButtonClick(5)}>
        Merge sort
      </button>
      <button className="button" onClick={() => handleButtonClick(6)}>
        Shell sort
      </button>
      <button className="button" onClick={() => handleButtonClick(7)}>
        Change size
      </button>
    </div>
  );
}

export default ButtonContainer;
