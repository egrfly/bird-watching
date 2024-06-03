const baseUrl = "https://api.ebird.org/v2"

const headers = {
  "X-eBirdApiToken": import.meta.env.VITE_EBIRD_API_KEY,
}

export const getSightingsData = async () => {
  const response = await fetch(`${baseUrl}/data/obs/GB/recent/notable?detail=full&maxResults=12`, { headers })
  return await response.json()
}
