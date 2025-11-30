const API_ALL_COUNTRIES =
  'https://restcountries.com/v3.1/independent?status=true'

async function sendRequest(url) {
  const resp = await fetch(url)
  const json = await resp.json()
  return json
}
async function updateCountries() {
  let countries = await sendRequest(API_ALL_COUNTRIES)
  console.log(countries[0])
  return countries
}
export default updateCountries
