import "../App.css";

function HoroscopePicker(props) {
  console.log(props.data, "props");
  console.log(props.yesBtnDataProps, "yesBtnDataProps")
  return (

    <div className="horo-container">
  
     {props.data.map((item, key) => (
        <div key={key} className="sign-box">
          <p>{item.sign}</p>
          </div>
    ))}
      
   
    </div>
  );
}

export default HoroscopePicker;
