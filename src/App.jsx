import heroLogo from "/illustration-hero.svg";
import musicIcon from "/icon-music.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <img className="topImg" src={heroLogo} />
        <div className="subContainer">
          <p className="header1 flex-item">Order Summary</p>
          <p className="outer-content flex-item">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex-item subscription">
            <img className="bottomImg" src={musicIcon} alt="" />
            <div className="gridItem">
              <p className="header2">Annual Plan</p>
              <p className="inner-content">$59.99/year</p>
            </div>
            <a className="link">Change</a>
          </div>
          <button className="button1 flex-item">Proceed to Payment</button>
          <button className="button2 flex-item">Cancel Order</button>
        </div>
      </div>
    </>
  );
}

export default App;
