import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts';
import { CharactersPage, EpisodesPage, LocationsPage, MainPage } from './pages';

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: 'episodes',
                element: <EpisodesPage />
            },
            {
                path: 'characters',
                element: <CharactersPage />
            },
            {
                path: 'locations',
                element: <LocationsPage />
            }
        ]
    }
]);

export {
    router
};