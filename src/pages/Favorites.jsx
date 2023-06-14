import React, { useContext } from 'react';
import { FavoritesContext } from '../components/FavoritesContext';
const Favorites = () => {
    const { favorites } = useContext(FavoritesContext);
    return (
        <div className='mt-5'>
            {favorites.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}
export default Favorites