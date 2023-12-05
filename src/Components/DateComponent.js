



function DateComponent(props) {
    console.log(props.data, "props for date")
 
// Get the current date
const currentDate = new Date();

// Get day, month, and year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
const year = currentDate.getFullYear();


// Format the date as "day/month/year"
const formattedDate = `${day}/${month}/${year}`;
console.log(formattedDate, "formattteddate")

//Extract all date ranges from the zodiac signs and map over the dateRange
const allDateRanges = props.data.map((sign) => sign.dateRange);
console.log(allDateRanges, "alldates")

//  extracting the start and end dates for a zodiac sign from the dateRange property and converting them into JavaScript Date objects.


const zodiacSignDates = allDateRanges.map((range) => {
    const dateRangeArray = range.split(" - ");
const startDate = dateRangeArray[0];
const endDate = dateRangeArray[1];

return {
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };

  


})

console.log(zodiacSignDates, "zodiac sign dates");

// now i have my 2 dates now i want to be able to find the sign that matches with the 2 dates that i have 





    return (
     
 <div className="date-container">
    {formattedDate}
    <p>The current Zodiac sign is : </p>
   
    </div>
  
      
      
    );
  }
  
  export default DateComponent;
  