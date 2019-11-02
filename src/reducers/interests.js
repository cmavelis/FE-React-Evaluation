import axios from 'axios';

import { fakeInterests } from '../dummy-data';

export const ACTION_TYPES = {
  GET_INTERESTS: 'interests/GET_INTERESTS',
};

const initialInterestsState = {
  data: [],
};

export default function user(state = initialInterestsState, action) {
  switch (action.type) {
  case ACTION_TYPES.GET_INTERESTS:
    return {
      data: fakeInterests,
    };
  default:
    return state;
  }
}

export const getInterests = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_INTERESTS,
    payload: axios.get('http://localhost:3000'),
  });
};
