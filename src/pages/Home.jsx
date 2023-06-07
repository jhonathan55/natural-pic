import React from 'react';

const Home = () => {
    const backgroundImage = 'img/1.jpg';
    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ height: '60vh' }}>
                <div className="col-6 text-center text-white">
                    <h1 className="display-1">IntelSoft</h1>
                    <p className="lead">
                        Líder en soluciones tecnológicas personalizadas.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Desarrollo web</h5>
                            <p className="card-text">Desarrollamos soluciones web a medida para tu negocio.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Análisis de datos</h5>
                            <p className="card-text">Analizamos datos para ayudarte a tomar decisiones informadas.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tiendas E-commerce</h5>
                            <p className="card-text">Creamos tiendas online eficientes y seguras.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;