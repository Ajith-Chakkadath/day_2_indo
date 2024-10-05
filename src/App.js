import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import LocationSection from './components/LocationSection';
import Click from './components/Click';
import Destination from './components/Destination';

function App() {
  return (
    <div className="App  bg-slate-100">
      <Hero />
     <LocationSection />
     <Click />
     <Destination />
    </div>
  );
}

export default App;
