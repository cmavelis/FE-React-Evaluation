import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardContainer from '../components/CardContainer';
import DATA_TYPES from '../common/DataTypes';

import lorem from './lorem';


const HomePage = (props) => {
  const { userName, interests, skills } = props;
  return (
    <div>
      <h1>{ `Welcome ${userName}` }</h1>
      <p>{lorem}</p>
      <CardContainer data={interests} dataType={DATA_TYPES.INTEREST} />
      <div className="horizontal-line" />
      <CardContainer data={skills} dataType={DATA_TYPES.SKILL} />
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
