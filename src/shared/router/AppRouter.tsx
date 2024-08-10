import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../../pages/Profile";
import { RootState } from "../../app/store";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Layout from "../ui/Layout";
import Register from "../../pages/Register";
import MovieDetails from "../../features/movie/ui/MovieDetails";
import Popular from "../../pages/Popular";
import Search from "../../pages/Search";
import NotFound from "../../pages/NotFound";

const AppRouter: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => !!state.user.email);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/login"
                        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        path="/register"
                        element={isAuthenticated ? <Navigate to="/" /> : <Register />}
                    />
                    <Route
                        path="/popular"
                        element={isAuthenticated ? <Popular /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/search"
                        element={isAuthenticated ? <Search /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/profile"
                        element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
                    />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
