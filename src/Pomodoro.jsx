import React, { useState, useEffect } from 'react';
import './Pomodoro.css'; // Import the CSS file

function Pomodoro() {
  const [workTime, setWorkTime] = useState({ minutes: 25, seconds: 0 });
  const [breakTime, setBreakTime] = useState({ minutes: 5, seconds: 0 });
  const [currentSession, setCurrentSession] = useState({ type: 'Work', ...workTime });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentSession(prevSession => {
          if (prevSession.seconds === 0) {
            if (prevSession.minutes === 0) {
              clearInterval(intervalId);
              handleSessionEnd();
              return prevSession;
            } else {
              return { ...prevSession, minutes: prevSession.minutes - 1, seconds: 59 };
            }
          } else {
            return { ...prevSession, seconds: prevSession.seconds - 1 };
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, currentSession]);

  const handleStartStopClick = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleResetClick = () => {
    const session = currentSession.type === 'Work' ? workTime : breakTime;
    setCurrentSession({ type: currentSession.type, ...session });
    setIsRunning(false);
  };

  const handleSessionEnd = () => {
    setCurrentSession(prevSession => {
      const nextType = prevSession.type === 'Work' ? 'Break' : 'Work';
      const nextTime = nextType === 'Work' ? workTime : breakTime;
      return { type: nextType, ...nextTime };
    });
    setIsRunning(false);
  };

  const handleTimeChange = (type, value) => {
    if (type === 'Work') {
      setWorkTime({ ...workTime, minutes: value });
    } else {
      setBreakTime({ ...breakTime, minutes: value });
    }
  };

  return (
    <div className="pomodoro">
      <h1>Pomodoro Timer</h1>
      <div className="timer">
        <span>{currentSession.minutes < 10 ? `0${currentSession.minutes}` : currentSession.minutes}</span>:
        <span>{currentSession.seconds < 10 ? `0${currentSession.seconds}` : currentSession.seconds}</span>
      </div>
      <div className="session-type">{currentSession.type}</div>
      <div className="time-inputs">
        <div>
          <label>Work Time (Minutes): </label>
          <input
            type="number"
            value={workTime.minutes}
            onChange={e => handleTimeChange('Work', parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Break Time (Minutes): </label>
          <input
            type="number"
            value={breakTime.minutes}
            onChange={e => handleTimeChange('Break', parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleStartStopClick}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
}

export default Pomodoro;
