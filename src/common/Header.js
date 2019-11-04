import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { userName } = props;

  const navigation = [
    ['/home', 'Home'],
    ['/skills', 'Skills'],
    ['/interests', 'Interests'],

    ['/interest/1', 'Interest 1'],
    ['/login', 'Logout'],
  ];

  return (
    <div className="App-header">
      <nav className="nav-bar">
        { `navbar ${userName}` }
        {navigation.map((navItem) => {
          const url = navItem[0];
          const name = navItem[1];
          return <NavLink key={name} activeClassName="nav-link-active" to={url}>{name}</NavLink>;
        })}
      </nav>
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
