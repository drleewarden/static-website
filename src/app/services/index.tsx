export const fetcher = async (url: string) => {
  // Get yours APIs key at https://developer.marvel.com
  const response = await fetch(url)
  const data = await response.json()
  return data
}
