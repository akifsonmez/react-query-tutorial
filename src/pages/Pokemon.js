import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch("http://localhost:4000/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        if (!ignore) {
          setPokemon(data);
          setLoading(false);
        }
      });

    return () => (ignore = true);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pokemon List (without React Query)</h1>
      {pokemon.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}
