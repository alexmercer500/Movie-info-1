const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

export async function load({ fetch, params }) {
  let searchParam = params.searchResult.split('-').join(' ');
  const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${PUBLIC_API_kEY}&query=${searchParam}&language=en-US&include_adult=false`
  const response = await fetch(apiUrl)
  const data = await response.json()
  return {
    data,
    searchParam
  }
}