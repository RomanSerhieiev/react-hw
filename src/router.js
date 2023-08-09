import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts';
import { CharactersPage, EpisodesPage } from './pages';
import { Main } from './components/Main/Main';

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'episodes',
                element: <EpisodesPage />
            },
            {
                path: 'characters',
                element: <CharactersPage />
            }
        ]
    }
])

export {
    router
}