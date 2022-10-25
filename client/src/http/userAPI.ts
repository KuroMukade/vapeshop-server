import { $authHost, $host } from './index';

export const registration = async (email: string, password: string) => {
    const response = await $host.post('api/auth/registration', {email, password, role: 'ADMIN'});
    return response;
}

export const login = async (email: string, password: string) => {
    const response = await $host.post('api/auth/registration', {email, password});
    return response;
}

export const check = async () => {
    const response = await $host.post('api/auth/registration');
    return response;
}