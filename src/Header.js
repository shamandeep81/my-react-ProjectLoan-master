import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark BGClass">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            LoanDPR
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div id='WelComeText' className="col-md-6 text-right text-white">
                            Welcome {"username: "}
                            <a
                                href="https://loandpr.com/auth_project/index.php/auth/logout"
                                className="nav-item text-white"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <hr ></hr>

        </div>
    )
}

export default Header