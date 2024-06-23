const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

export async function load({ fetch, params }) {
    const fetchMovie = async (id) => {
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${PUBLIC_API_kEY}`
        const response = await fetch(url)
        const tvData = await response.json()
        return tvData
    }
    const fetchCast = async (id) => {
        const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${PUBLIC_API_kEY}`
        const response = await fetch(url)
        const castData = await response.json()
        return castData
    }

    return {
        tvData: await fetchMovie(params.tvInfo),
        castData: await fetchCast(params.tvInfo)
    }
}