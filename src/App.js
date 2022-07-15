import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ParallelQueries from "./pages/ParallelQueries";
import PokemonList from "./pages/PokemonList";
import RQPokemon from "./pages/RQPokemon";
import RQPokemonList from "./pages/RQPokemonList";
import DynamicParallelQueries from "./pages/DynamicParallelQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/pokemon">Pokemon</Link>
              <Link to="/rqpokemon">RQ Pokemon</Link>
              <Link to="/parallelQueries">Parallel Queries</Link>
              <Link to="/dynamicParallelQueries">Dynamic Parallel Queries</Link>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon" element={<PokemonList />} />
            <Route path="rqpokemon" element={<RQPokemonList />}></Route>
            <Route path="rqpokemon/:pokemonId" element={<RQPokemon />} />
            <Route path="parallelQueries" element={<ParallelQueries />} />
            <Route
              path="dynamicParallelQueries"
              element={
                <DynamicParallelQueries pokemonNames={["ivysaur", "bulbasaur"]} />
              }
            />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
