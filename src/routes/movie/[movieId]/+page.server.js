const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

export async function load({ fetch, params }) {
  const fetchMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${PUBLIC_API_kEY}`
    const response = await fetch(url)
    const movieData = await response.json()
    return movieData
  }
  const fetchCast = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${PUBLIC_API_kEY}`
    const response = await fetch(url)
    const castData = await response.json()
    return castData
  }
  const movieData = await fetchMovie(params.movieId);
  const castData = await fetchCast(params.movieId);
  return {
    movieData, castData
  }
}