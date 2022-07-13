import { useParams } from "react-router-dom";
import { usePokemonData } from "../hooks/usePokemonData";

export default function RQPokemon() {
  const { pokemonId } = useParams();
  const { data, isLoading } = usePokemonData(pokemonId);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <p>Poke Id: {pokemonId}</p>
      <p>Poke Name: {data.name}</p>
    </div>
  );
}
