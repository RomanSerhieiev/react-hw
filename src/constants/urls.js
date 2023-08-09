const baseURL = process.env.REACT_APP_API

const episodes = '/episode'
const characters = '/character'
const locations = '/location'

const urls = {
    episodes: {
        all: episodes,
        id: (id) => `${episodes}/${id}`
    },
    characters: {
        all: characters,
        id: (id) => `${characters}/${id}`
    },
    locations: {
        all: locations,
        id: (id) => `${locations}/${id}`
    }
}

export {
    baseURL,
    urls
}