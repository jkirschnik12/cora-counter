import { useEffect, useState } from "react";
import "./App.css";

function addDay(date) {
  date.setDate(date.getDate() + 1);
  return date;
}

function getNumWorkDays(startDate, endDate) {
  var numWorkDays = 0;
  var currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    // Skips Sunday and Saturday
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      numWorkDays++;
    }
    currentDate = addDay(currentDate);
  }
  return numWorkDays;
}

function timeUntilDone() {
  const currentTime = new Date();
  const lastDay = new Date(2022, 7, 12);
  const difference = Math.abs(lastDay - currentTime);
  return {
    days: Math.ceil(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function App() {
  const [time, setTime] = useState(timeUntilDone());
  useEffect(() => {
    setTimeout(() => {
      setTime(timeUntilDone());
    }, 1000);
  });
  const currentTime = new Date();
  const lastDay = new Date(2022, 7, 12, 17, 0);
  const workDays = getNumWorkDays(currentTime, lastDay);
  return (
    <>
      <header>Cora Countdown to last day of work (8/12)</header>
      <body className="App-header">
        <table>
          <tr>
          <th>Total Days</th>
          <th>Work Days</th>
          <th>Hours</th>
          <th>Min</th>
          <th>Sec</th>
          </tr>
          <tr>
            <td>{time.days}</td>
            <td>{workDays}</td>
            <td>{time.hours}</td>
            <td>{time.minutes}</td>
            <td>{time.seconds}</td>
          </tr>
        </table>
      </body>
    </>
  );
}

export default App;
