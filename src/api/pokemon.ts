import { API_HOST } from "../utils/constants";

export async function getPokemonApi(endpointUrl: string | null) {
  console.log("🚀👊  ~ getPokemonApi ~ endpointUrl:", endpointUrl)
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailByUrlApi(url: string) {
  try {
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
