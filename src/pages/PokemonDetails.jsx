import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const PokemonDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/' + params.name);

    if (loading) {
        return <div className='container d-flex justify-content-center mt-3'>
            <div class="spinner-border text-primary mt-5 " role="status"><span class="visually-hidden">Loading...</span></div> </div> ;
    }
    if (error) {
        return <p>{error}</p>;
    }
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-12 text-center mt-2">
                    <h2>Pokemon Details</h2>
                    <button type="button" className="btn btn-primary m-3" onClick={handleBack}>Volver</button>
                </div>
                {loading && <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>}
                {data && (
                    <div className="col-lg-6">
                        <div className="card mt-3">
                            <img src={data.sprites.front_default} className="card-img-top" alt={data.name} style={{maxWidth: '200px', margin: 'auto'}} />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text"><strong>Peso:</strong> {data.weight}</p>
                                <p className="card-text"><strong>Altura:</strong> {data.height}</p>
                                <p className="card-text">
                                    <strong>Habilidades:</strong>
                                    {data.abilities.map((ability, index) => (
                                        <span key={index} className="badge bg-primary me-2">{ability.ability.name}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    
    
}

export default PokemonDetails;
