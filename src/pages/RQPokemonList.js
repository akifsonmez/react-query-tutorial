import { useState } from "react";
import { usePokemonListData } from "../hooks/usePokemonListData";

export default function RQPokemonList() {
  const [refetchInterval, setRefetchInterval] = useState(3000);

  const onSuccess = (data) => {
    console.log("this runs after successful data fetching", data);
    data.length === 21 && setRefetchInterval(false);
  };

  const onError = (error) => {
    console.log("this runs after unsuccessful data fetching", error);
  };
  const { data, error, isLoading, isError, isFetching, refetch } =
    usePokemonListData({ onError, onSuccess, refetchInterval });
  console.log({ isLoading, isFetching });

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
      <button onClick={refetch}>Refetch</button>
      {/* {data?.map((p) => (
        <p key={p}>{p}</p>
      ))} */}
      {data?.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}
