import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Articles from './Pages/Home/ArticleContainer/Articles/Articles';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
