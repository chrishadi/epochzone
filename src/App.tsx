import Epoch from './Epoch'
import DateTime from './DateTime';
import NanoDate from './NanoDate';
import logo from './logo.svg';
import './App.css';

function App() {
  const date = new NanoDate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DateTime date={date}></DateTime>
        <Epoch date={date}></Epoch>
      </header>
    </div>
  );
}

export default App;
