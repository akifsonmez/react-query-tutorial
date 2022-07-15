import { useQuery } from "react-query";

const fetchPokemonLocation = () => {
  return fetch("https://pokeapi.co/api/v2/location/").then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};
const fetchPokemonBerries = () => {
  return fetch("https://pokeapi.co/api/v2/berry/").then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export default function ParallelQueries() {
  // When the number of parallel queries does not change, there is no extra effort to use parallel queries.
  const { data: locationData } = useQuery(
    "pokemon-location",
    fetchPokemonLocation
  );
  const { data: berriesData } = useQuery(
    "pokemon-berries",
    fetchPokemonBerries
  );

  console.log(berriesData, locationData);

  return (
    <div>
      <h1>Parallel Queries</h1>
      <p>results logged to the console</p>
    </div>
  );
}
