import React from "react";

function DateComponent({ currentDate, currentZodiacSign }) {
  return (
    <div className="date-container">
      {currentDate}
      <div></div>
      <p> The current sign for today is : {currentZodiacSign}</p>
    </div>
  );
}

export default DateComponent;
