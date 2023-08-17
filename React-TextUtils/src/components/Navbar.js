import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

let Navbar=(props)=>{


    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.main}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li><form className="d-flex mx-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </li>
      </ul>

      <div>
      <input type="radio" name="bgcolor" className='btn' id="yellow" onClick={props.bgColorYellow}/>
      <label htmlFor="yellow" className='btn btn-warning'>YELLOW</label>
      <input type="radio" name="bgcolor" className='btn' id="cyan" onClick={props.bgColorCyan}/>
      <label htmlFor="cyan" className='btn btn-info'>CYAN</label>
      <input type="radio" name="bgcolor" className='btn' id="red" onClick={props.bgColorRed}/>
      <label htmlFor="red" className='btn btn-danger'>RED</label>
      <input type="radio" name="bgcolor" className='btn' id="pink" onClick={props.bgColorPink}/>
      <label htmlFor="pink" className='btn btn-primary'>PINK</label>
      </div>
      
            <div className={`form-check form-switch mx-2 text-${props.mode==="light"? "dark":"light"}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

Navbar.propTypes= {title: propTypes.string,
                   main:propTypes.string}

 Navbar.defaultProps={title: "Set the title",
                      main: "this is the main menu"}                  

export default Navbar;