export const ACTION_TYPES = {
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
};

const initialUserState = {
  userName: '',
};

export default function user(state = initialUserState, action) {
  switch (action.type) {
  case ACTION_TYPES.LOGIN:
    return {
      ...state,
      userName: action.payload,
    };
  case ACTION_TYPES.LOGOUT:
    return initialUserState;
  default:
    return state;
  }
}

export const login = (username) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOGIN,
    payload: username,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOGOUT,
  });
};
