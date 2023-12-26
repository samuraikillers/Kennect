import "./DataDisplay.css";


function DataDisplay({ numbers, widthShrink }) {
  return (
    <div className="array-container">
      {numbers.map((number, index) => (
        <div>
          <div
            key={index}
            className="box"
            style={{
              height: `${(number / 100) * 100}px`,
              width: `${widthShrink}px`,
            }}
          ></div>
          <div className="number">{number}</div>
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;
