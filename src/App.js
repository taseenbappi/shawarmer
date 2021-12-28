import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Articles from './Pages/Home/ArticleContainer/Articles/Articles';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddCat from './Pages/Dashboard/AddCat/AddCat';
import AddSubCat from './Pages/Dashboard/AddSubCat/AddSubCat';
import AddArticle from './Pages/Dashboard/AddArticle/AddArticle';

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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="addCatagory" element={<AddCat />} />
            <Route path="addSubCatagory" element={<AddSubCat />} />
            <Route path="addArticle" element={<AddArticle />} />
          </Route>
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
