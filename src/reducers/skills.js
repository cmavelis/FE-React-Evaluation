import axios from 'axios';

import { fakeSkills } from '../dummy-data';

export const ACTION_TYPES = {
  GET_SKILLS: 'skills/GET_SKILLS',
};

const initialSkillsState = {
  data: [],
};

export default function user(state = initialSkillsState, action) {
  switch (action.type) {
  case ACTION_TYPES.GET_SKILLS:
    return {
      data: fakeSkills,
    };
  default:
    return state;
  }
}

export const getSkills = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_SKILLS,
    payload: axios.get('http://localhost:3000'),
  });
};
