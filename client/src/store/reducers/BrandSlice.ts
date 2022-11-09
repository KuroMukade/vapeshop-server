import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IBrand {
    id: number,
    name: string,
}

interface BrandState {
    brands: IBrand[],
    error: string,
    isLoading: boolean,
    selectedBrand: any,
}

const initialState: BrandState = {
    brands: [],
    isLoading: true,
    error: '',
    selectedBrand: 1,
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        brandsFetching(state) {
            state.isLoading = true;
        },
        brandsFetchingSuccess(state, action: PayloadAction<IBrand[]>) {
            state.isLoading = false;
            state.error = '';
            state.brands = action.payload;
        },
        brandsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
        setSelectedBrand(state, action: PayloadAction<any>) {
            state.selectedBrand = action.payload;
        }
    }
});

export default brandSlice.reducer;
