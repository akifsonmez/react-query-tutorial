import { useInfiniteQuery } from "react-query";

const fetchPokemonList = ({ pageParam = 1 }) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${(pageParam - 1) * 20}&limit=20`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export default function InfiniteQueries() {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery(
    "pokemon-infinite",
    ({ pageParam = 1 }) => fetchPokemonList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
      getPreviousPageParam: (firstPage, allPages) => {
        return allPages.length - 1;
      },
    }
  );

  return (
    <div>
      <h1>Pokemon List (with React Query Infinite Queries) </h1>
      <button onClick={fetchPreviousPage}>Prev</button>
      <button onClick={fetchNextPage}>Next</button>
      {/* {data?.results?.map((p) => (
        <div key={p.name} className="pokemon-list">
          <Link to={`/rqpokemon/${p.name}`}>
            <h3>{p.name.toUpperCase()}</h3>
          </Link>
        </div>
      ))} */}
    </div>
  );
}
