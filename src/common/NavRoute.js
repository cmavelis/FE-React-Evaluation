import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        <Header />
        {/* eslint-disable-next-line  */}
        <Component {...props} />
      </div>
    )}
  />
);

NavRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.shape(PropTypes.element),
};

NavRoute.defaultProps = {
  exact: false,
  component: {},
};

export default NavRoute;
