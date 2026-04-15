import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Species from './Species.jsx';

function App() {
  
  return(
    <BrowserRouter>
        <h1>Test</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/species">Playable Species</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species" element={<Species />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
