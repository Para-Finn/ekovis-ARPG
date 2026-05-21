import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Species from './Species.jsx';
import UserProfile from './User_Profile.jsx';
import CharaSubmit from './Character_Submission.jsx';

function App() {
  
  return(
    <body>
      <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/profile">Profile</Link> | {" "}
            <Link to="/species">Playable Species</Link> | {" "}
            <Link to="/submitchara">Submit</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/species" element={<Species />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/submitchara" element={<CharaSubmit />} />
          </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App
