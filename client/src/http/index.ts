import axios, { AxiosInstance } from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

// Просто функция, которая параметрами принимает конфиг
const authInterceptor = (config: any) => {
    config.header.authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}