import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const lastDay = new Date(2022, 7, 12, 17, 0);
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
      <header>LAST DAY OF WORK 8/12</header>
      <body className="App-header">
        <Container fluid>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <Button href="https://bit.ly/3IkpWRT" target="_blank">
                CLICK ME
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-md-center">
              <h1 className="title">Total Days: </h1>
              <h1 className="data">{time.days}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-md-center">
              <h1 className="title">Work Days: </h1>
              <h1 className="data">{workDays}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-md-center">
              <h1 className="title">Hours: </h1>
              <h1 className="data">{time.hours}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-md-center">
              <h1 className="title">Minutes: </h1>
              <h1 className="data">{time.minutes}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-md-center">
              <h1 className="title">Seconds: </h1>
              <h1 className="data">{time.seconds}</h1>
            </Col>
          </Row>
        </Container>
      </body>
    </>
  );
}

export default App;
