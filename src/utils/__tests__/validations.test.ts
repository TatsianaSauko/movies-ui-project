import { validatePassword } from "../validation";

describe("validatePassword", () => {
    it("should return an error if the password is less than 8 characters", () => {
        const result = validatePassword("short");
        expect(result).toBe("Password must be at least 8 characters long.");
    });

    it("should return an error if the password does not contain a number", () => {
        const result = validatePassword("NoNumbers!");
        expect(result).toBe("Password must contain at least one number.");
    });

    it("should return an error if the password does not contain a special character", () => {
        const result = validatePassword("NoSpecial1");
        expect(result).toBe("Password must contain at least one special character.");
    });

    it("should return an empty string if the password meets all criteria", () => {
        const result = validatePassword("ValidPass1!");
        expect(result).toBe("");
    });
});
