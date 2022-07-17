import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchPokemonList = (offset) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export default function PaginatedQueries() {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError, error } = useQuery(
    ["pokemon-paginated", offset],
    () => fetchPokemonList(offset)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Pokemon List (with React Query)</h1>
      <button
        onClick={() => {
          setOffset(offset - 20);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setOffset(offset + 20);
        }}
      >
        Next
      </button>
      {data?.results?.map((p) => (
        <div key={p.name} className="pokemon-list">
          <Link to={`/rqpokemon/${p.name}`}>
            <h3>{p.name.toUpperCase()}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
