import axios from 'axios';
import type { Movie, MoviesResponse } from "../types/movie.ts";

const myKey = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const config = {
        params: { query, },
        headers: {
            Authorization: `Bearer ${myKey}`
        },
    }
    const response = await axios.get<MoviesResponse>(
        'https://api.themoviedb.org/3/search/movie',
        config
    );
    return response.data.hits;
}