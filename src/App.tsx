import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile/Profile';
import { RootState } from './app/store';
import Login from './pages/Login/Login';
import Layout from './shared/ui/Layout';


const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.user.email);

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
      </Layout>
     
    </Router>
  );
};

export default App;
