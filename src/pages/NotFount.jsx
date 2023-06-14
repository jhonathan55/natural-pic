import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="text-center">
                <h1 className="display-1 text-danger">404</h1>
                <h2 className="display-4">Página no encontrada</h2>
                <p className="lead">Lo sentimos, la página que buscas no existe.</p>
                <Link className="btn btn-primary mt-4" to="/">pag Inicio</Link>

            </div>
        </div>
    );
}

export default NotFound;
