import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    email: string;
    password: string;
    name: string;
    surname: string;
}

const initialState: UserState = {
    email: "",
    password: "",
    name: "",
    surname: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setSurname(state, action: PayloadAction<string>) {
            state.surname = action.payload;
        },
        clearUser(state) {
            state.email = "";
            state.password = "";
            state.name = "";
        },
    },
});

export const { setEmail, setPassword, setName, setSurname, clearUser } = userSlice.actions;
export default userSlice.reducer;
