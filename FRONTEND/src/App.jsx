import { Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Graduates from './pages/Graduates';
import Courses from './pages/Courses';
import Careers from './pages/Careers';
import Speakers from './pages/Speakers';
// import Login from "./pages/Login"; // esto es para cuando usemos el login jeje

function App() {
    return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/graduados" element={<Graduates />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/speakers" element={<Speakers />} />

        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
