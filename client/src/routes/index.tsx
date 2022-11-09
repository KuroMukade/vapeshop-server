import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Admin from '../pages/Admin'; 
import { ADMIN_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Auth from '../pages/Auth/Auth';
import DevicePage from '../pages/DevicePage';
import Shop from '../pages/Shop';

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
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage />
    },
    {
        path: '*',
        element: <MainPage />
    },
    {
        path: SHOP_ROUTE,
        element: <Shop/>
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
        path:  REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage />,
    },
    {
        path: SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: '*',
        element: <MainPage />
    }
]);

