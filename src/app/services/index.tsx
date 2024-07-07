import axios from 'axios'

export const fetcher = async (url: string) => {
  // Get yours APIs key at https://developer.marvel.com
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const fetchCharacters = async (page = 1) => {
  const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
    process.env.NEXT_PUBLIC_MARVEL_API_KEY
  }&hash=${process.env.NEXT_PUBLIC_MARVEL_HASH}&limit=10&offset=${page * 10}`
  return await fetcher(url)
}
export const actData = async () => {
  try {
    const response = await axios.get(`https://www.data.act.gov.au/api/views/s4g9-ndv2/rows.json`)
    const jsonResponse = JSON.parse(JSON.stringify(response.data))
    return jsonResponse
  } catch (error: any) {
    throw new Error(error.message)
  }
}
