import './App.css';
import {Route,Routes} from 'react-router-dom';

//components
import WeatherApp from './components/WeatherApp';
import Navbar from './components/Navbar';
import WeatherForHours from './components/WeatherForHours';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<WeatherApp/>} />
        {/* <Route path='/' element={<Navbar/>} /> */}
        <Route path='/' element={<WeatherForHours/>} />
      </Routes>
    </div>
  );
}

export default App;
