import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/model/userSlice";
import movieReducer from "../features/movie/model/movieSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
