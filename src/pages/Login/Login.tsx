import styles from "./Login.module.scss";
import commonStyles from "../../app/styles/commonStyles.module.scss";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UserFormLogin from "../../features/user/ui/UserFormLogin";

const Login: React.FC = () => {
    return (
        <div className={styles.login}>
            <div className={commonStyles.logo}>Movies</div>
            <UserFormLogin />
            <Link to="/register">
                <Text as="b">Register</Text>
            </Link>
        </div>
    );
};

export default Login;
