import React, { useContext } from "react"
import { FavoritesContext } from "../components/FavoritesContext"

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Producto 1",
            description: "Descripción del producto 1",
        },
        {
            id: 2,
            name: "Producto 2",
            description: "Descripción del producto 2",
        },
        {
            id: 3,
            name: "Producto 3",
            description: "Descripción del producto 3",
        },
        // más productos...
    ];
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    return (
        <div className="container" style={{marginTop:"4rem"}}>
            {products.map((product) => (
                <div key={product.id} className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <button
                                    className={`btn btn-${favorites.find((fav) => fav.id === product.id) ? "secondary" : "primary"}`}
                                    onClick={() =>
                                        favorites.find((fav) => fav.id === product.id)
                                            ? removeFavorite(product.id)
                                            : addFavorite(product)
                                    }
                                >
                                    {favorites.find((fav) => fav.id === product.id) ? 'Remove from favorites' : 'Add to favorites'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
export default Products