import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts';
import { CharacterPage, CharactersPage, EpisodePage, EpisodesPage, LocationPage, LocationsPage, MainPage } from './pages';

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
            },
            {
                path: 'episode',
                element: <EpisodePage />
            },
            {
                path: 'character',
                element: <CharacterPage />
            },
            {
                path: 'location',
                element: <LocationPage />
            }
        ]
    }
]);

export {
    router
};