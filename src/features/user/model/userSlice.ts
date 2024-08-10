import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./userInterfaces";

const initialState: UserState = {
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    name: localStorage.getItem("name") || "",
    surname: localStorage.getItem("surname") || "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
            localStorage.setItem("email", action.payload);
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
            localStorage.setItem("password", action.payload);
        },
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
            localStorage.setItem("name", action.payload);
        },
        setSurname(state, action: PayloadAction<string>) {
            state.surname = action.payload;
            localStorage.setItem("surname", action.payload);
        },
        clearUser(state) {
            state.email = "";
            state.password = "";
            state.name = "";
            state.surname = "";
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("name");
            localStorage.removeItem("surname");
        },
    },
});

export const { setEmail, setPassword, setName, setSurname, clearUser } = userSlice.actions;
export default userSlice.reducer;
