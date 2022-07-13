import { useQuery } from "react-query";

const fetchPokemon = () => {
  return fetch("http://localhost:4000/pokemon").then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export const usePokemonListData = ({ refetchInterval, onSuccess, onError }) => {
  return useQuery("pokemonList", fetchPokemon, {
    cacheTime: 300000, // 5 minutes default time
    staleTime: 5000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchInterval: refetchInterval,
    refetchIntervalInBackground: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   return data.map((p) => p.name);
    // },
  });
};
