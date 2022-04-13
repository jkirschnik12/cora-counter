import './App.css';

function App() {
  const currentTime = new Date();
  const lastDay = new Date(2022,7,12)
  const diffTime = Math.abs(lastDay - currentTime);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <>
    <header>
    Cora Countdown to last day of work (8/12)
    </header>
      <body className="App-header">
        <h1>{diffDays + ' days'}</h1>
      </body>
      </>
  );
}

export default App;
