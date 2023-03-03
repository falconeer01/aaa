import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  return (
    <div className="container-fluid">
      <div className='inner-cont mt-5'>
        <WeatherProvider>
          <h1>Forecast App</h1>
          <Header/>
          <Main/>
        </WeatherProvider>
      </div>
    </div>
  );
}

export default App;