import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/favorites">Favoritos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/mas">Mas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav