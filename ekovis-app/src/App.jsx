import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Species from './Species.jsx';
import UserProfile from './User_Profile.jsx';

function App() {
  
  return(
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/profile">Profile</Link> | {" "}
          <Link to="/species">Playable Species</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species" element={<Species />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
