import { useQuery } from "react-query";

const fetchPokemon = ({ queryKey }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${queryKey[1]}`).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error("Error with code " + resp.status);
      }
      return resp.json();
    }
  );
};

export function usePokemonData(pokemonId) {
  return useQuery(["pokemon", pokemonId], fetchPokemon, {
    initialData: { name: "Inital data example" },
  });
}
