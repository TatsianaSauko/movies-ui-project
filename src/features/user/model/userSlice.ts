// src/features/user/model/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearUser: (state) => {
      state.email = '';
      state.password = '';
    },
  },
});

export const { setEmail, setPassword, clearUser } = userSlice.actions;
export default userSlice.reducer;
