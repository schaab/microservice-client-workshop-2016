import React, { PropTypes } from 'react';

const Navbar = (setActiveLink, activeLink) =>
{
    return (<nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">React Demo</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className={activeLink === 'Home' ? 'active' : ''}>
                        <a href="#" onClick={() => setActiveLink('Home')}>Home</a>
                    </li>
                    <li className={activeLink === 'Quotes' ? 'active' : ''}>
                        <a href="#" onClick={() => setActiveLink('Quotes')} >Quotes</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
};

Navbar.propTypes = {
    setActiveLink: PropTypes.func.isRequired,
    activeLink: PropTypes.string.isRequired
};

export default Navbar;
