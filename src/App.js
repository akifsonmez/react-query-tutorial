import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import DependentQueries from "./pages/DependentQueries";
import DynamicParallelQueries from "./pages/DynamicParallelQueries";
import Home from "./pages/Home";
import PaginatedQueries from "./pages/PaginatedQueries";
import ParallelQueries from "./pages/ParallelQueries";
import PokemonList from "./pages/PokemonList";
import RQPokemon from "./pages/RQPokemon";
import RQPokemonList from "./pages/RQPokemonList";

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
              <Link to="/dependentQueries">Dependent Queries</Link>
              <Link to="/paginatedQueries">Paginated Queries</Link>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon" element={<PokemonList />} />
            <Route path="rqpokemon" element={<RQPokemonList />}></Route>
            <Route path="rqpokemon/:pokemonId" element={<RQPokemon />} />
            <Route path="parallelQueries" element={<ParallelQueries />} />
            <Route path="paginatedQueries" element={<PaginatedQueries />} />
            <Route
              path="dynamicParallelQueries"
              element={
                <DynamicParallelQueries
                  pokemonNames={["ivysaur", "bulbasaur"]}
                />
              }
            />
            <Route path="dependentQueries" element={<DependentQueries />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
