import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from '@/web_pages/Home'
import CharaFrom from '@/web_pages/Create_Character'
import MasterlistPage from '@/web_pages/Masterlist'

function NavBar(){
    return(
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/createchara">Submit New Character</Link> {" | "}
            <Link to="/masterlist">Masterlist</Link> {" | "}
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createchara" element={<CharaFrom />} />
            <Route path="/masterlist" element={<MasterlistPage />} />
          </Routes>
      </BrowserRouter>
    )
}

export default NavBar