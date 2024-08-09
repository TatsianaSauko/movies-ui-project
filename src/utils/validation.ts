export const validatePassword = (password: string) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>+-]/;

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasNumber.test(password)) {
        return "Password must contain at least one number.";
    }
    if (!hasSpecialChar.test(password)) {
        return "Password must contain at least one special character.";
    }
    return "";
};
