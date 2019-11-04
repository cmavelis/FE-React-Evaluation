import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InterestsPage from './InterestsPage';
import InterestDetailPage from './InterestDetailPage';
import { getInterests } from '../reducers/interests';
import { getSkills } from '../reducers/skills';


class HomePage extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { getInterests, getSkills } = this.props;
    getInterests();
    getSkills();
  }

  render() {
    const { userName } = this.props;
    return (
      <div>
        <nav>
          { `navbar ${userName}` }
          <Link to="/interest/1">Interest 1</Link>
          <Link to="/interests">Interests</Link>
          <Link to="/login">Login</Link>
        </nav>

        { `Welcome ${userName}` }

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
  getSkills: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.user.userName,
  interests: state.interests.data,
  skills: state.skills.data,
});

const mapDispatchToProps = {
  getInterests,
  getSkills,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
