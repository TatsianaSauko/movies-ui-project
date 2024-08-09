// src/pages/register/Register.tsx
import React from "react";
import styles from "./Register.module.scss";
import commonStyles from "../../app/styles/commonStyles.module.scss";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UserFormRegister from "../../features/user/ui/UserFormRegister";

const Register: React.FC = () => {
    return (
        <div className={styles.register}>
            <div className={commonStyles.logo}>Movies</div>
            <Text as="b" fontSize="lg">
                Register
            </Text>
            <UserFormRegister />
            <Link to="/login">
                <Text as="b">Log in</Text>
            </Link>
        </div>
    );
};

export default Register;
