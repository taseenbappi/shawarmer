import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
