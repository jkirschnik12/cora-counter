import './App.css';

function getNumWorkDays(startDate, endDate) {
  var numWorkDays = 0;
  var currentDate = new Date(startDate);
  while (currentDate <= endDate) {
      // Skips Sunday and Saturday
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
          numWorkDays++;
      }
      currentDate = currentDate.addDays(1);
  }
  return numWorkDays;
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function App() {
  const currentTime = new Date();
  const lastDay = new Date(2022,7,12);
  const diffTime = Math.abs(lastDay - currentTime);
  const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const workDays = getNumWorkDays(currentTime, lastDay);
  return (
    <>
    <header>
    Cora Countdown to last day of work (8/12)
    </header>
      <body className="App-header">
        <h1>{daysRemaining + ' days'}</h1>
        <h1>{workDays + ' work days'}</h1>
      </body>
      </>
  );
}

export default App;
