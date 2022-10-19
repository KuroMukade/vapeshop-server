import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '../../models/IBrand';
import { IDevice } from '../../models/IDevice';
import { IType } from '../../models/IType';

interface DeviceState {
    types: IType[],
    brands: IBrand[],
    devices: IDevice[],
}

const initialState: DeviceState = {
    // saga moment

}