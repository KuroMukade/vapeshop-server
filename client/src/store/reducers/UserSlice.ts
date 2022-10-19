import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user: {},
    isAuth: boolean,
}

const initialState: UserState = {
    user: {},
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        }
    }
})

export default userSlice.reducer;