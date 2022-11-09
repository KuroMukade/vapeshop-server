import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import deviceReducer from './reducers/DeviceSlice';
import typeReducer from './reducers/TypeSlice';
import brandReducer from './reducers/BrandSlice';

const rootReducer = combineReducers({
    userReducer,
    deviceReducer,
    typeReducer,
    brandReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];