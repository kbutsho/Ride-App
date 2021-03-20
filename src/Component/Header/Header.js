import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container">
                <h3>Take A Trip</h3>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link px-4" to="/home">Home</Link>
                        <Link className="nav-link px-4" to="/destination">Destination</Link>
                        <Link className="nav-link px-4" to="/home">Blog</Link>
                        <Link className="nav-link px-4" to="/home">Contact</Link>


                    </div>


                    {
                        loggedInUser.email ?
                            <div className="d-flex">
                                <div> <button className="mx-4 btn btn-danger" onClick={() => setLoggedInUser({})}>Log Out</button></div>
                                <div className="text-danger mt-2">User: {loggedInUser.email}</div>
                            </div> :
                            <Link className="nav-link px-4" to="/login">Login</Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;