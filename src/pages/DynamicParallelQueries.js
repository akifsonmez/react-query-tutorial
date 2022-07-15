import { useQueries } from "react-query";

const fetchPokemon = async ({ queryKey }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${queryKey[1]}`).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error("Error with code " + resp.status);
      }
      return resp.json();
    }
  );
};

export default function DynamicParallelQueries({ pokemonNames }) {
  const queries = pokemonNames.map((p) => ({
    queryKey: ["dynamic-pokemon", p],
    queryFn: fetchPokemon,
  }));
  const results = useQueries(queries);
  console.log(results);
  return (
    <div>
      <h1>DynamicParallelQueries</h1>
      <p>results logged to the console</p>
    </div>
  );
}
