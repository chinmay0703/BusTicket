import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Buslist from './components/Buslist';
function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/buslist' element={<Buslist/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
