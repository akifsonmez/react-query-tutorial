import { useQuery } from "react-query";

const fetchPokemon = () => {
  return fetch("http://localhost:4000/pokemon").then((resp) => resp.json());
};

export default function RQFunction() {
  const { data, error, isLoading } = useQuery("pokemonList", fetchPokemon);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h1>Pokemon List (with React Query)</h1>
      {data?.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}
