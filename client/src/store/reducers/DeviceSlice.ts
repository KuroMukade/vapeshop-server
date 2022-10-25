import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '../../models/IBrand';
import { IDevice } from '../../models/IDevice';
import { IType } from '../../models/IType';

interface DeviceState {
    devices: IDevice[],
    isLoading: boolean,
    error: string
}

const initialState: DeviceState = {
    devices: [],
    isLoading: true,
    error: ''
}

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        devicesFetching(state) {
            state.isLoading = true;
        },
        devicesFetchingSuccess(state, action: PayloadAction<IDevice[]>) {
            state.isLoading = false;
            state.error = '';
            state.devices = action.payload;
        },
        devicesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default deviceSlice.reducer;