const baseURL = process.env.REACT_APP_API;

const endpoints = {
    episodes: '/episode',
    characters: '/character',
    locations: '/location'
};

const urls = {
    episodes: {
        page: endpoints.episodes,
        id: (id) => `${endpoints.episodes}/${id}`
    },
    characters: {
        page: endpoints.characters,
        id: (id) => `${endpoints.characters}/${id}`
    },
    locations: {
        page: endpoints.locations,
        id: (id) => `${endpoints.locations}/${id}`
    }
};

export {
    baseURL,
    urls
};