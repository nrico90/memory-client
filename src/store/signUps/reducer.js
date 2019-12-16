const initialState = {
  successToken: null
};

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case "sign_up/SUCCESS_SIGN_UP": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
