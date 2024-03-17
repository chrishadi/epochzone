import NanoDate from './NanoDate';
import logo from './logo.svg';
import './App.css';
import EpochConverter from './EpochConverter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  const date = new NanoDate();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <EpochConverter></EpochConverter>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
