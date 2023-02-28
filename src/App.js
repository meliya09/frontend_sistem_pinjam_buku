import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signin from './Pages/Signin';
import Dashboard from './Dashboard/Dashboard';
import Murid from './Murid/Murid';

function App() {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Signin />
  }

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/murid" element={<Murid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
