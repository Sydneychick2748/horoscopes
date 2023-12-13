import React, { useState } from "react";
import HoroscopePicker from "../Components/HoroscopePicker";
import DateComponent from "../Components/DateComponent";
import ModelComp from "../Components/ModelComp";

function Home({ dataProps }) {
  // console.log(dataProps, "dataProps");
  const data = dataProps.horoscopes.astroSigns;

  const [showText, setShowText] = useState(false);
  const [noBtnText, setNoBtnText] = useState(false);
  const [yesBtnData, setYesBtnData] = useState([]);
  const [seeDateText, setSeeDateText] = useState(false);
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [currentSign, setCurrentSign] = useState("");
  const [formDate, setFormDate] = useState({ birthday: "" });
  const [showSign, setShowSign] = useState(false);
  const [userSign, setUserSign] = useState("");

  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  function getCurrentZodiacSign(date) {
    console.log(date, "DATE");
    // Find the matching zodiac sign
    const currentZodiacSign = data.find((horoscope) => {
      const dateRange = horoscope.dateRange.split("-");
      // console.log(dateRange, "dateRange");

      const startDate = new Date(
        dateRange[0] + " " + currentDate.getFullYear()
      );
      const endDate = new Date(dateRange[1] + " " + currentDate.getFullYear());
      console.log(endDate, startDate, currentDate, "startDate DATE");

      // console.log(endDate, currentDate, startDate.split().pop().toString(), "endDate");

      if (date >= startDate && date <= endDate) {
        return true;
      }

      return false;
    });
    console.log(currentZodiacSign, "SIGNSIGNIS");
    return currentZodiacSign.sign;
  }


  function resetState() {
    setShowText(false);
    setNoBtnText(false);
    setYesBtnData([]);
    setSeeDateText(false);
    setIsBoxClicked(false);
    setSelectedBox(null);
    setCurrentSign("");
    setFormDate({ birthday: "" });
    setShowSign(false);
    setUserSign("");
  }






  function seeDateClick() {
    // console.log("clicked");
    setSeeDateText(!seeDateText);

    setCurrentSign(getCurrentZodiacSign(currentDate));
  }

  function startBtnClick() {
    // console.log("clicked");
    setShowText(!showText);
  }

  function yesBtnClick() {
    // console.log("clicked");
    const signNames = data.map((item) => item.sign);
    console.log(signNames, "signNames");
    setYesBtnData(signNames);
  }

  // Function to handle box clicks
  function handleEachBoxClick(selectBox) {
    setIsBoxClicked(true);
    setSelectedBox(selectBox);
    // Implement your logic for handling box click here
    console.log(`Box clicked`);
  }

  function noBtnClick() {
    // console.log("clicked");
    setNoBtnText(true);
   // Delay the form reset for 2 seconds (adjust the duration as needed)
   setTimeout(() => {
    // Reset the form after the delay
    resetState();
  }, 2000);
  }

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormDate({ ...formDate, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formBirthdayDate = formDate.birthday;

    // Display the sign
    let sign = getCurrentZodiacSign(new Date(formBirthdayDate));
    setUserSign(sign);
    setShowSign(true);

    // Delay the form reset for 2 seconds (adjust the duration as needed)
    setTimeout(() => {
      // Reset the form after the delay
      setFormDate({ birthday: "" });
    }, 5000);
  };

  


  return (
    <div className="home-container">
      <button className="startBtn" onClick={startBtnClick}>
        {showText ? "Hide" : "Start"}
      </button>

      {/* this should only appear if the showText is true  */}
      {showText ? (
        <div>
          <h2>Learn About Your Horoscope !</h2>
          <p>Would you like to choose an astrological sign</p>
          <div className="form-container">
            <h4>What is Your sign</h4>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="dateInput">Select Date:</label>
                <input
                  type="date"
                  name="birthday"
                  value={formDate.birthday}
                  onChange={handleDateChange}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
                <div className="sign-show">
                  {showSign && formDate.birthday ? (
                    <p>Your sign is: {userSign}</p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
          <div>
            <button className="seeDateBtn" onClick={seeDateClick}>
              {seeDateText
                ? "Click here to hide today's date"
                : "Click here to see today's Date"}
            </button>
            {seeDateText && (
              <DateComponent
                currentZodiacSign={currentSign}
                currentDate={formattedDate}
              />
            )}
          </div>

          {/* if you click on the button I want to display the data for the boxes of signs */}
          <button className="yesBtn" onClick={yesBtnClick}>
            Yes, Please!
          </button>

          {yesBtnData.length > 0 && (
            <HoroscopePicker
              data={data}
              yesBtnDataProps={yesBtnData}
              onBoxClick={handleEachBoxClick} // Pass the handleEachBoxClick function
            />
          )}
          {isBoxClicked ? (
            <ModelComp
              closeModal={() => setIsBoxClicked(false)}
              selectedButton={selectedBox}
            />
          ) : null}

          {/* when the button is clicked the data is showed and now on the data i need a button on every object to click  */}

          {/* this has to show some text saying sorry to see you go when clicked */}
          <button className="noBtn" onClick={noBtnClick}>
            No, Thank you!
          </button>

          <p>{noBtnText ? "Sorry to see you go" : null}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
