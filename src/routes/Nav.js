import React from 'react';
import '../routes/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const isLoggedIn = localStorage.getItem('login');
    const logoutt = () => {
        localStorage.removeItem('login');
    }
    return (
        <div className='text-white'>
            <nav class="navbar navbar-expand-lg bg-dark   ">
                <div class="container-fluid text-white">
                    <a class="navbar-brand text-white" href="#">Navbar</a>
                    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon " style={{ color: "black" }}></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Buslist</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Timing
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Morning</a></li>
                                    <li><a class="dropdown-item" href="#">Evening</a></li>

                                    <li><a class="dropdown-item" href="#">Night</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/login">
                                    {isLoggedIn ? <button className='btn btn-danger' onClick={logoutt}>Logout</button> : <button className='btn btn-primary'>Login</button>}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default Nav;
