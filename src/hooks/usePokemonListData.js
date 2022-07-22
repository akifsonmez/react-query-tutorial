import { useQuery } from "react-query";

const fetchPokemonList = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/").then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export const usePokemonListData = ({ refetchInterval, onSuccess, onError }) => {
  return useQuery("pokemonList", fetchPokemonList, {
    cacheTime: 300000, // 5 minutes default time
    staleTime: 5000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    //refetchInterval: refetchInterval,
    //refetchIntervalInBackground: false,
    onSuccess,
    onError,
    select: (data) => {
      return data.results;
    },
  });
};
