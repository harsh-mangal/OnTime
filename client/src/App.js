
import './App.css';
import Display from './Components/Display';
import Features from './Components/Features';
import HeroCard from './Components/HeroCard';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Display/>
    </div>
  );
}

export default App;
