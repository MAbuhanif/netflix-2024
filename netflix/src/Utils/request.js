const Api_key = import.meta.env.API_KEY;

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
};

export default requests;
