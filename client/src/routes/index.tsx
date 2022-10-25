import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Admin from '../pages/Admin'; 
import { ADMIN_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, DEVICE_ROUTE } from '../utils/consts';
import Auth from '../pages/Auth/Auth';
import DevicePage from '../pages/DevicePage';

export const AuthRoutes = () => useRoutes([
    {
        path: MAIN_ROUTE,
        element: <MainPage />
    },
    {
        path: ADMIN_ROUTE, 
        element: <Admin />
    },
    {
        path: DEVICE_ROUTE,
        element: <DevicePage />
    },
    {
        path: '*',
        element: <MainPage />
    },
]);

export const PublicRoutes = () => useRoutes([
    {
        path: MAIN_ROUTE,
        element: <MainPage />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage />,
    },
    {
        path: '*',
        element: <MainPage />
    }
]);

