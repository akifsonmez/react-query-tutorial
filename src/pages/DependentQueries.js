import { useQuery } from "react-query";

const fetchBulbasaur = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`).then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

const fetchAbility = (ability) => {
  return fetch(`https://pokeapi.co/api/v2/ability/${ability}`).then((resp) => {
    if (!resp.ok) {
      throw new Error("Error with code " + resp.status);
    }
    return resp.json();
  });
};

export default function DependentQueries() {
  const bulbasaur = useQuery("bulbasaur", fetchBulbasaur);
  const bulbasaurAbilityName = bulbasaur?.data?.abilities[0].ability.name;
  const ability = useQuery(
    ["ability", bulbasaurAbilityName],
    () => fetchAbility(bulbasaurAbilityName),
    { enabled: !!bulbasaurAbilityName }
  );
  console.log(bulbasaur, ability);
  return (
    <div>
      <h1>DependentQueries</h1>
      <p>results logged to the console</p>
    </div>
  );
}
