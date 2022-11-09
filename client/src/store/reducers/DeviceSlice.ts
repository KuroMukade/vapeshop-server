import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDevice } from '../../models/IDevice';

interface DeviceState {
  devices: IDevice[];
  isLoading: boolean;
  error: string;
  page: number;
  totalCount: number;
  limit: number;
}

const initialState: DeviceState = {
  devices: [],
  isLoading: true,
  error: '',
  page: 1,
  totalCount: 1,
  limit: 3,
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    devicesFetching(state) {
      state.isLoading = true;
    },
    devicesFetchingSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = '';
      state.devices = action.payload;
    },
    devicesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
  },
});

export default deviceSlice.reducer;
