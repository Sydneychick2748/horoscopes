import React from "react";


function DateComponent({ currentDate, currentZodiacSign }) {
    const zodiacSignName = currentZodiacSign ? currentZodiacSign.sign : "Unknown"
    console.log(currentDate, zodiacSignName , "props for the date comp")
  




  return (
    <div className="date-container">
      {currentDate}
      <div>
      </div>
      <p>Your current sign is: {zodiacSignName}</p>
    </div>
  );
}

export default DateComponent;
