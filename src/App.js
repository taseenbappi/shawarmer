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
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

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

          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard >
            </Dashboard>
          </PrivateRoute>} />

          <Route path="/dashboard/addCatagory" element={<PrivateRoute>
            <AddCat />
          </PrivateRoute>} />
          <Route path="/dashboard/addSubCatagory" element={<PrivateRoute>
            <AddSubCat />
          </PrivateRoute>} />
          <Route path="/dashboard/addArticle" element={<PrivateRoute>
            <AddArticle />
          </PrivateRoute>} />


        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
