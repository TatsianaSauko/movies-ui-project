import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../../pages/profile/Profile";
import { RootState } from "../../app/store";
import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Layout from "../ui/Layout/Layout";
import Register from "../../pages/Register/Register";
import MovieDetails from "../../features/ui/MovieDetails";

const AppRouter: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => !!state.user.email);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/profile"
                        element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
                    />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
