import { useState,useEffect } from "react";

function DateComponent(props) {
  console.log(props.data, "props for date");
  const [newObjects, setNewObjects] = useState([]);

  // Get the current date
  const currentDate = new Date().toLocaleDateString();
  console.log(currentDate, "currentDate");

  useEffect(() => {
    // Extract all date ranges from the zodiac signs and map over the dateRange
    const zodiacSignDates = props.data.map((sign) => {
      const dateRangeArray = sign.dateRange.split(" - ");
      const startDate = dateRangeArray[0];
      const endDate = dateRangeArray[1];
      // push in the sign and then update the object so that is contains the date object
      const updatedSign = {
        ...sign,
        startDate: new Date(startDate).toLocaleDateString(),
        endDate: new Date(endDate).toLocaleDateString(),
      };

      return updatedSign;
    });

    setNewObjects(zodiacSignDates); // Update state with the new array
  }, [props.data]);

  

  console.log(newObjects, "zodiac sign dates");


  // now i have my 2 dates now i want to be able to find the sign that matches with the 2 dates that i have
  // Find the zodiac sign that matches the current date
  const currentZodiacSign = newObjects.find((signs) => {
    console.log(signs , "signs")
    console.log("Comparing:", currentDate, signs.startDate, signs.endDate);
    return currentDate >= signs.startDate && currentDate <= signs.endDate;
  });

  const zodiacSignName = currentZodiacSign ? currentZodiacSign.sign : "Unknown";
  console.log(zodiacSignName, "zodiacNames");
  console.log(currentZodiacSign, "currentzs")
    
  return (
    <div className="date-container">
      {currentDate}

      <p>Your current sign is: {zodiacSignName}</p>
    </div>
  );
  
    }

    export default DateComponent;