import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Admin from '../pages/Admin'; 
import { ADMIN_ROUTE, MAIN_ROUTE } from '../utils/consts';

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
        path: '*',
        element: <MainPage />
    }
]);

export const PublicRoutes = () => useRoutes([
    {
        path: MAIN_ROUTE,
        element: <MainPage />
    },
    {
        path: '*',
        element: <MainPage />
    }
]);

