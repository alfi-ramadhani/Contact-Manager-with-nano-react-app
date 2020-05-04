import React from 'react';
import PropTypes from 'prop-types';

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
              <a href="/" className="nav-link">Home</a>
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