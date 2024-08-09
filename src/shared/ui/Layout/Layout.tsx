// src/shared/ui/Layout.tsx
import React from "react";
import Header from "../../../widgets/header/Header";
import Footer from "../../../widgets/footer/Footer";
import styles from "./Layout.module.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
