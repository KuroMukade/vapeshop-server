import axios from "axios";
import { AppDispatch } from "../store";
import { IDevice } from "../../models/IDevice";
import { deviceSlice } from "./DeviceSlice";

interface DeviceRequest {
    count: number,
    rows: IDevice[]
}

export const fetchProducts = () =>  async (dispatch: AppDispatch) => {
    try {
        dispatch(deviceSlice.actions.devicesFetching());
        console.log(process.env.REACT_APP_API_URL);
        const response = await axios.get<DeviceRequest>(`${process.env.REACT_APP_API_URL}/api/device`);
        dispatch(deviceSlice.actions.devicesFetchingSuccess(response.data.rows));
    } catch (error: any) {
        dispatch(deviceSlice.actions.devicesFetchingError(error.message))
    }
}