import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapData, setLapData] = useState([]);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    }
  }

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  const reset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  const lap = () => {
    setLapData((prevLapdata) => [...prevLapdata, time])
  }


  return (
    <div className='main-cont' style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stopwatch</h1>
      <h2>{time}</h2>
      <div className='btn-group'>
        <button onClick={start} disabled={isRunning}>start</button>
        <button onClick={stop} disabled={!isRunning}>Stop</button>
        <button onClick={reset}>Reset</button>
        <button onClick={lap} disabled={!isRunning}>Lap</button>
      </div>

      {lapData.length > 0 &&
        <div className='lap-table' style={{ textAlign: "center", padding: "20px" }}>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Lap Time</td>
              </tr>
            </thead>
            <tbody>
              {
                lapData.map((lap, index) => (
                  <tr key={lap}>
                    <td>{index + 1}</td>
                    <td>{lap}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>}

    </div>
  )
}

export default Stopwatch