import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {
    const { data, loading, error } = useFetch("https://pokeapi.co/api/v2/pokemon/");
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pokemon/${selectedPokemon}`);
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-12">
                    <h2 className='mb-3 mt-2'>Selecciona un Pokemon</h2>
                </div>
                <div className="col-12">
                    {loading && <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>}
                    {error && <div class="alert alert-danger" role="alert">{error}</div>}
                    {data && (
                        <div className="input-group mb-3">
                            <select className="form-select" onChange={e => setSelectedPokemon(e.target.value)}>
                                <option selected>Seleccionar...</option>
                                {data.results.map((pokemon) => (
                                    <option key={pokemon.name} value={pokemon.name}>
                                        {pokemon.name}
                                    </option>
                                ))}
                            </select>
                            {selectedPokemon && 
                                <button type="button" className="btn btn-primary ms-2" onClick={handleClick}>Ver detalle</button>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
    
}
export default Pokemon;
