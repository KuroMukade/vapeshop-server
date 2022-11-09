import axios from 'axios';
import { AppDispatch } from '../store';
import { IDevice } from '../../models/IDevice';
import { deviceSlice } from './DeviceSlice';
import { typeSlice } from './TypeSlice';
import { IType } from '../../models/IType';
import { IBrand } from '../../models/IBrand';
import { brandSlice } from './BrandSlice';

interface DeviceRequest {
  count: number;
  rows: IDevice[];
}

export const fetchProducts =
  (typeId?: string, brandId?: string, page?: string, limit?: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(deviceSlice.actions.devicesFetching());
      const response = await axios.get<DeviceRequest>(
        `${process.env.REACT_APP_API_URL}/api/device`,
        { params: { typeId, brandId, page, limit } },
      );
      dispatch(deviceSlice.actions.devicesFetchingSuccess(response.data.rows));
      dispatch(deviceSlice.actions.setTotalCount(response.data.count));
    } catch (error: any) {
      dispatch(deviceSlice.actions.devicesFetchingError(error.message));
    }
  };

export const fetchOneProduct = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(deviceSlice.actions.devicesFetching());
    const response = await axios.get<DeviceRequest>(
      `${process.env.REACT_APP_API_URL}/api/device/${id}`,
    );
    dispatch(deviceSlice.actions.devicesFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(deviceSlice.actions.devicesFetchingError(error.message));
  }
};

export const fetchTypes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(typeSlice.actions.typesFetching());
    const response = await axios.get<IType[]>(`${process.env.REACT_APP_API_URL}/api/type`);
    dispatch(typeSlice.actions.typesFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(typeSlice.actions.typesFetchingError(error.message));
  }
};

export const fetchBrands = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(brandSlice.actions.brandsFetching());
    const response = await axios.get<IBrand[]>(`${process.env.REACT_APP_API_URL}/api/brand`);
    dispatch(brandSlice.actions.brandsFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(brandSlice.actions.brandsFetchingError(error.message));
  }
};
