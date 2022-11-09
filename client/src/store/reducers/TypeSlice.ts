import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IType } from '../../models/IType';

interface TypeState {
    types: IType[],
    isLoading: boolean,
    error: string,
    selectedType: any,
}

const initialState: TypeState = {
    types: [],
    isLoading: true,
    error: '',
    selectedType: 1,
}

export const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        typesFetching(state) {
            state.isLoading = true;
        },
        typesFetchingSuccess(state, action: PayloadAction<IType[]>) {
            state.isLoading = false;
            state.error = '';
            state.types = action.payload;
            state.selectedType = action.payload[0];
        },
        typesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
        setSelectedType(state, action: PayloadAction<any>) {
            state.selectedType = action.payload;
        }
    }
})

export default typeSlice.reducer;