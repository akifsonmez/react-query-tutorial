import { useState } from "react";
import { useQuery } from "react-query";

const fetchPokemon = () => {
  return fetch("http://localhost:4000/pokemon").then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export default function RQFunction() {
  const [refetchInterval, setRefetchInterval] = useState(3000);

  const onSuccess = (data) => {
    console.log("this runs after successful data fetching", data);
    data.length === 21 && setRefetchInterval(false);
  };

  const onError = (error) => {
    console.log("this runs after unsuccessful data fetching", error);
  };
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
    "pokemonList",
    fetchPokemon,
    {
      cacheTime: 300000, // 5 minutes default time
      staleTime: 5000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchInterval: refetchInterval,
      refetchIntervalInBackground: false,
      onSuccess,
      onError,
    }
  );
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
      {data?.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}
