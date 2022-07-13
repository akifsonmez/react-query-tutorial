import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";
import RQPokemonList from "./pages/RQPokemonList";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pokemon" element={<PokemonList />}></Route>
            <Route path="/rqpokemon" element={<RQPokemonList />}></Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
