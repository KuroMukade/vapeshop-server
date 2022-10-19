import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
    userReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type UserStore = ReturnType<typeof setupStore>
export type UserDispatch = UserStore['dispatch'];