import React from "react";

function DateComponent({ data }) {
  console.log(data, "props for date");
  const currentDate = new Date().toLocaleDateString();

  console.log(currentDate, "currentDate");

  // now I have my 2 dates now I want to be able to find the sign that matches with the 2 dates that I have
  // Find the zodiac sign that matches the current date
  const currentZodiacSign = data.find((sign) => {
    console.log(sign, "sign");
    console.log("Comparing:", currentDate, sign.startDate, sign.endDate);
    return currentDate >= sign.startDate && currentDate <= sign.endDate;
  });

  const zodiacSignName = currentZodiacSign ? currentZodiacSign.sign : "Unknown";
  console.log(zodiacSignName, "zodiacNames");
  console.log(currentZodiacSign, "currentzs");

  return (
    <div className="date-container">
      {currentDate}

      <p>Your current sign is: {zodiacSignName}</p>
    </div>
  );
}

export default DateComponent;
