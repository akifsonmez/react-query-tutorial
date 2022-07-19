import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchPokemonList = ({ pageParam = 1 }) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${(pageParam - 1) * 2}&limit=2`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export default function InfiniteQueries() {
  const { fetchNextPage, fetchPreviousPage, data } = useInfiniteQuery(
    "pokemon-infinite",
    fetchPokemonList,
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
      getPreviousPageParam: (firstPage, allPages) => {
        return allPages.length - 1;
      },
    }
  );

  console.log(data);
  return (
    <div>
      <h1>Pokemon List (with React Query Infinite Queries) </h1>
      <button onClick={fetchPreviousPage}>Prev</button>
      <button onClick={fetchNextPage}>Next</button>
      {data?.pages?.map((page, i) => (
        <div key={i}>
          {page?.results?.map((p) => (
            <div className="pokemon-list">
              <Link to={`/rqpokemon/${p.name}`}>
                <h3>{p.name.toUpperCase()}</h3>
              </Link>
            </div>
          ))}
        </div>
      ))}
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
