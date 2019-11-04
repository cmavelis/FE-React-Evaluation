import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardContainer from '../components/CardContainer';


const HomePage = (props) => {
  const { userName, interests, skills } = props;
  return (
    <div>
      { `Welcome ${userName}` }
      <p> Lorem ipsum </p>
      <CardContainer data={interests} />
      <CardContainer data={skills} />
    </div>
  );
};

HomePage.propTypes = {
  userName: PropTypes.string.isRequired,
  interests: PropTypes.arrayOf(PropTypes.object),
  skills: PropTypes.arrayOf(PropTypes.object),
};

HomePage.defaultProps = {
  interests: [],
  skills: [],
};

const mapStateToProps = (state) => ({
  userName: state.user.userName,
  interests: state.interests.data,
  skills: state.skills.data,
});

export default connect(
  mapStateToProps,
)(HomePage);
