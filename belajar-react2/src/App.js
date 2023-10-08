import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/logins';
import Register from './component/Register';
import HubungiKami from './component/HubungiKami';
import KliemKami from './component/KliemKami';
import Infoperusahaan from './component/InfoP';
import Dashboard from './component/dashboard';

function App() {
  return (
    // Router digunakan untuk mengelola navigasi antar halaman dengan React Router
    <Router>
      {/* Routes adalah komponen yang digunakan untuk mendefinisikan rute-rute dalam aplikasi */}
      <Routes>
        {/* Setiap Route mendefinisikan rute yang sesuai dengan URL tertentu dan mengarahkan ke komponen yang sesuai */}
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<HubungiKami />} />
        <Route path='/InfoPerusahaan' element={<Infoperusahaan />} />
        <Route path='/klienkami' element={<KliemKami />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
