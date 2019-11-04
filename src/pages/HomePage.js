import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
        { `Welcome ${userName}` }
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
