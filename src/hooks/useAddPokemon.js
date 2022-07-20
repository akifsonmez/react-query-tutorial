import { useMutation } from "react-query";

function postPokemon() {
  fetch("http://localhost:5000/pokemon", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "akif",
      url: "test",
    }),
  });
}

export function useAddPokemon() {
  return useMutation(postPokemon);
}
