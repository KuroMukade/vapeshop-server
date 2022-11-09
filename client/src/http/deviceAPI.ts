import {$authHost} from "./index";

export const createType = async (type: any) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const createBrand = async (brand: any) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const createDevice = async (device: any) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}