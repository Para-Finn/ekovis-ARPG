import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CharaSubmit from '@/web_pages/New_Chara_Submit';
import HomePage from '@/web_pages/Home';

function NavBar(){
    return(
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/charasubmit">New character submission</Link>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/charasubmit" element={<CharaSubmit />} />
          </Routes>
      </BrowserRouter>
    );
}

export default NavBar;