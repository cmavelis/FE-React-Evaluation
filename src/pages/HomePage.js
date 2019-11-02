import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InterestsPage from './InterestsPage';
import InterestDetailPage from './InterestDetailPage';
import { getInterests } from '../reducers/interests';

class HomePage extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getInterests();
  }

  render() {
    return (
      <div>
        Home Page

        <button type="button">
          <Link to="/interest/1">Interest 1</Link>
        </button>
        <button type="button">
          <Link to="/interests">Interests</Link>
        </button>

        <Switch>

          <Route path="/interest/:id">
            <InterestDetailPage />
          </Route>
          <Route path="/interests">
            <InterestsPage />
          </Route>

        </Switch>
      </div>
    );
  }
}

HomePage.propTypes = {
  getInterests: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  interests: state.interests.data,
});

const mapDispatchToProps = {
  getInterests,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
