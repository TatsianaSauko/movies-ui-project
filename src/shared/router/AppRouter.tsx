import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../../pages/Profile";
import { RootState } from "../../app/store";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Layout from "../ui/Layout";
import Register from "../../pages/Register";
import MovieDetails from "../../features/ui/MovieDetails";
import Popular from "../../pages/Popular";
import Search from "../../pages/Search";

const AppRouter: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => !!state.user.email);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/search" element={<Search />} />
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
