import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import NonShiny from './components/pages/NonShiny'
import Shiny from './components/pages/Shiny'
function App() {
  return (
    <div className="App">
      <Router>
        
        <NavBar/>
        
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/non-shiny" element={<NonShiny/>} />
          <Route path="/shiny" element={<Shiny/>} />
          
        
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
