// 1. Make sure you have a home page
// 1. Render a button on the home page
// 2. When it’s clicked, the text in the button should change from start to hide and a paragraph should display to the user.
// 3. The user should be able to toggle on and off
//4. if the button is clicked then it should show hide on the button instead of start and if the hide button is showing a text will also appear saying "appear"

import React, { useState } from "react";
import HoroscopePicker from "../Components/HoroscopePicker";
import DateComponent from "../Components/DateComponent";

function Home({ dataProps }) {
  console.log(dataProps, "dataProps");
  const data = dataProps.horoscopes.astroSigns;

  const [showText, setShowText] = useState(false);
  const [noBtnText, setNoBtnText] = useState(false);
  const [yesBtnData, setYesBtnData] = useState([]);
  const [seeDateText, setSeeDateText] = useState(false);
  const [dateComponentVisible, setDateComponentVisible] = useState(false);

  function startBtnClick() {
    console.log("clicked");
    setShowText(!showText);
  }

  function yesBtnClick() {
    console.log("clicked");
    const signNames = data.map((item) => item.sign);
    console.log(signNames, "signNames");
    setYesBtnData(signNames);
  }

  function noBtnClick() {
    console.log("clicked");
    setNoBtnText(true);
  }

  function seeDateClick() {
    console.log("clicked");
    setSeeDateText(!seeDateText);
    setDateComponentVisible(!dateComponentVisible); // Toggle visibility of DateComponent
  }

  return (
    <div className="home-container">
      <button onClick={startBtnClick}>{showText ? "Hide" : "Start"}</button>
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
            {dateComponentVisible ? <DateComponent data={data} /> : null}
          </div>

          {/* if you click on the button I want to display the data for the boxes of signs */}
          <button className="yesBtn" onClick={yesBtnClick}>
            Yes, Please!
          </button>
          {yesBtnData.length > 0 && (
            <HoroscopePicker data={data} yesBtnDataProps={yesBtnData} />
          )}

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
