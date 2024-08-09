// src/App.tsx
import React, { useEffect } from "react";
import AppRouter from "../shared/router/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/api/fetchUser";
import { RootState } from "../app/store";
import "./index.scss";

const App: React.FC = () => {
    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.user.email);

    useEffect(() => {
        const handleBeforeUnload = async (event: BeforeUnloadEvent) => {
            if (email) {
                try {
                    await logout();
                } catch (error) {
                    console.error("Logout error:", error);
                }
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [dispatch, email]);

    return <AppRouter />;
};

export default App;
