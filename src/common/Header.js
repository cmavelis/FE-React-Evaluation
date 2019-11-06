import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../noinc_header.png';
import './Header.css';

const Header = (props) => {
  const { userName } = props;

  const navigation = [
    ['/home', 'Home'],
    ['/skills', 'Skills'],
    ['/interests', 'Interests'],

    ['/login', 'Logout'],
  ];

  return (
    <div className="header-wrapper">
      <div className="header-logo-wrapper">
        <img src={logo} alt="NO.INC" className="logo" />
      </div>
      <div className="nav-wrapper">
        <nav className="nav-bar">
          {navigation.map((navItem) => {
            const url = navItem[0];
            const name = navItem[1];
            return (
              <div className="nav-item">
                <NavLink
                  key={name}
                  activeClassName="nav-link-active"
                  to={url}
                >
                  {name}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <span className="header-username">
          <i className="fas fa-user" />
          <span>{userName}</span>
        </span>
      </div>
    </div>
  );
};


Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.user.userName,
});

export default connect(
  mapStateToProps,
)(Header);
