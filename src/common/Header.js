import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  const { userName } = props;
  return (
    <div className="App-header">
      <nav>
        { `navbar ${userName}` }
        <NavLink activeClassName="nav-link-active" to="/interest/1">Interest 1</NavLink>
        <Link to="/interests">Interests</Link>
        <Link to="/login">Logout</Link>
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
