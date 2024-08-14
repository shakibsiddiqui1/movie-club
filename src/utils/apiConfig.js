export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"