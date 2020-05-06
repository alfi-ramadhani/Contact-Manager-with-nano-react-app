import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = (props) => {
  const {branding} = props;
  return (
    // <div>
    //   <h1 style={{background: 'blue', fontSize: '40px'}}>{branding}</h1>
    //   <h2 style={devStyle}>Development Mode</h2>
    // </div>
    <nav className="navbar navbar-expand-sm bg-info navbar-dark mb-3">
      <div className="container">
      <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i> Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-question"></i> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const devStyle = {
  background: 'purple'
}

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header;