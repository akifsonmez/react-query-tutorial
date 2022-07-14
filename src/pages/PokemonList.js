import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error with code " + resp.status);
        }
        return resp.json();
      })
      .then((data) => {
        if (!ignore) {
          setPokemon(data.results);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        if (!ignore) {
          setError(e.message);
          setIsLoading(false);
        }
      });

    return () => (ignore = true);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Pokemon List (without React Query)</h1>
      {pokemon?.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}
