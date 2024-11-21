import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapData, setLapData] = useState([]);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const lap = () => {
    setLapData((prevLapdata) => [...prevLapdata, time]);
  };

  // Format time as mm:ss:ms
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2,"0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="main-cont" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div className="btn-group">
        <button onClick={start} disabled={isRunning}>
          start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={lap} disabled={!isRunning}>
          Lap
        </button>
      </div>

      {lapData.length > 0 && (
        <table style={{ margin: "20px auto", borderCollapse: "collapse", width: "50%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Lap Time</th>
            </tr>
          </thead>
          <tbody>
            {lapData.map((lap, index) => (
              <tr key={lap}>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{index + 1}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{formatTime(lap)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Stopwatch;
