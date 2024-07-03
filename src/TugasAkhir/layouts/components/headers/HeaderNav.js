import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../../layouts/components/headers/Header.css";
import { BiHome, BiInfoCircle, BiImage, BiPhone, BiUser, BiMessage, BiLogIn } from 'react-icons/bi';

export default function HeaderNav() {
  const menuList = [
    { id: 1, name: 'Home', path: '/home', icon: <BiHome /> },
    { id: 2, name: 'About Us', path: '/About', icon: <BiInfoCircle /> },
    { id: 3, name: 'Galery', path: '/Galery', icon: <BiImage /> },
    { id: 5, name: 'Contact Us', path: '/Contact', icon: <BiPhone /> },
    { id: 6, name: 'Testimoni', path: '/testimoni', icon: <BiUser /> },
    
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top shadow bg-white hh">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h1 className="Headatas">Need Some Wine</h1>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse btnc" id="navbarCollapse">
            <div className="d-flex w-100 justify-content-end">
              <div id="main-nav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  {menuList.map((v, index) => (
                    <li className="nav-item me-1" key={index}>
                      <NavLink className="nav-link text-hover-success px-3" to={v.path}>
                        <span className="nav-icon">{v.icon}</span>
                        {v.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
