import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import RQPokemon from "./pages/RQPokemon";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

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
            <Route path="/pokemon" element={<Pokemon />}></Route>
            <Route path="/rqpokemon" element={<RQPokemon />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
