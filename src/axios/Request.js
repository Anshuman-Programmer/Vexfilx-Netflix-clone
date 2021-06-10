const API_KEY = "1935cc617de6ac2cd888d98e46655441";


const requests = {
    fetchAllTranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchMovieTranding: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTvTranding: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;