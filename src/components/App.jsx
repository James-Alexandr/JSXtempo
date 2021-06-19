import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  let [theTime, setTime] = useState(time);

  setInterval(getTime, 1000);
  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  //get the time
  return (
    <div className="container">
      <h2>{theTime}</h2>

      <button onClick={() => getTime()}>Get Time</button>
    </div>
  );
}

export default App;
