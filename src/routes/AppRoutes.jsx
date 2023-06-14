import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Products from '../pages/Products';
import Pokemon from '../pages/Pokemon';
import PokemonDetails from '../pages/PokemonDetails';
import NotFound from '../pages/NotFount';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}

export default AppRoutes;
