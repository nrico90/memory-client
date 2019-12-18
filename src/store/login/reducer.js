const initialState = {
  jwt: null,
  email: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return { ...state, jwt: action.payload.jwt, email: action.payload.email };
    }
    case "USER_SIGN_UP": {
      return { ...state, jwt: action.payload, email: action.payload.email };
    }
    case "auth/LOG_OUT": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
