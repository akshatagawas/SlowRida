import React, { useState, useEffect } from 'react';

export function App() {
  const [redLight, setRedLight] = useState(true);
  const [yellowLight, setYellowLight] = useState(false);
  const [greenLight, setGreenLight] = useState(false);

  useEffect(() => {
    const trafficInterval = setInterval(() => {
      setRedLight(true);
      setYellowLight(false);
      setGreenLight(false);

      setTimeout(() => {
        setRedLight(false);
        setYellowLight(true);
        setGreenLight(false);
      }, 3000);

      setTimeout(() => {
        setRedLight(false);
        setYellowLight(false);
        setGreenLight(true);
      }, 4000); 

    }, 6000);

    return () => clearInterval(trafficInterval)
  }, []);

  return (
    <div className='App'>
      <h1>Traffic Lights</h1>
      <div className={(redLight? "red-circle" : "circle-hidden")+" circle"}></div>
      <div className={(yellowLight? "yellow-circle" : "circle-hidden")+" circle"}></div>
      <div className={(greenLight? "green-circle" : "circle-hidden")+" circle"}></div>
    </div>
  );
}

export default App;
