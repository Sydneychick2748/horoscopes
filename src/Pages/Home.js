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

  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  function getCurrentZodiacSign() {
    // Find the matching zodiac sign
    const currentZodiacSign = data.find((horoscope) => {
      const dateRange = horoscope.dateRange.split("-");
      // console.log(dateRange, "dateRange");

      const startDate = new Date(
        dateRange[0] + " " + currentDate.getFullYear()
      );
      const endDate = new Date(dateRange[1] + " " + currentDate.getFullYear());

      // console.log(endDate, currentDate, startDate.split().pop().toString(), "endDate");

      if (currentDate >= startDate && currentDate <= endDate) {
        return true;
      }

      return false;
    });

    return currentZodiacSign;
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
    setSelectedBox(selectBox)
    // Implement your logic for handling box click here
    console.log(`Box clicked`);
  }

  

  function noBtnClick() {
    // console.log("clicked");
    setNoBtnText(true);
  }

  function seeDateClick() {
    // console.log("clicked");
    setSeeDateText(!seeDateText);
    getCurrentZodiacSign();
  }

  const sign = getCurrentZodiacSign();

  return (
    <div className="home-container">
      <button className="startBtn" onClick={startBtnClick}>{showText ? "Hide" : "Start"}</button>

      {/* this should only appear if the showText is true  */}
      {showText ? (
        <div>
          <h2>Learn About Your Horoscope !</h2>
          <p>Would you like to choose an astrological sign</p>
          <div>
            <button className="seeDateBtn" onClick={seeDateClick}>
              {seeDateText
                ? "Click here to hide today's date"
                : "Click here to see today's Date"}
            </button>
            {seeDateText && (
              <DateComponent
                currentZodiacSign={sign}
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
          {isBoxClicked ? <ModelComp closeModal={() => setIsBoxClicked(false)} selectedButton={selectedBox} /> : null}

          {/* when the button is clicked the data is showen and now on the data i need a button on every object to click  */}

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
