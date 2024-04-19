
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Locations from './Pages/Locations';
import Login from './Pages/Login';
import Vehicles from './Pages/Vehicles';
function App() {
  
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Vehicles" element={<Vehicles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
