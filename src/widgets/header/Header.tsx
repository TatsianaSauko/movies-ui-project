import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchMoviesTop } from "../../features/movie/api/fetchMovies";
import { FaSignInAlt } from "react-icons/fa";
import styles from "./Header.module.scss";
import SearchBar from "../../shared/SearchBar/SearchBar";
import commonStyles from "../../app/styles/commonStyles.module.scss";

const Header: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const name = useSelector((state: RootState) => state.user.name);

    const handlePopularClick = () => {
        dispatch(fetchMoviesTop());
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={commonStyles.logo}>Movies</div>
                    <nav className={styles.nav}>
                        <Link to="/">Home</Link>
                        <div onClick={handlePopularClick}>Popular</div>
                    </nav>
                </div>
                <div className={styles.right}>
                    <SearchBar />
                    {name ? (
                        <Link to="/profile" className={styles.userName}>
                            {name}
                        </Link>
                    ) : (
                        <Link to="/login" className={styles.loginIcon}>
                            <FaSignInAlt size={24} />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
