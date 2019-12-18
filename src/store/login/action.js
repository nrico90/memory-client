import api from "../../api";

export function login(email, password) {
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        dispatch(userLoggedIn(data.jwt, data.email));
      })
      .catch(err => console.log("err", err));
  };
}

export function userLoggedIn(jwt, email) {
  return {
    type: "USER_LOGGED_IN",
    payload: { jwt, email }
  };
}

export function signUpSuccess(jwt, email) {
  return {
    type: "USER_SIGN_UP",
    payload: { jwt, email }
  };
}

export function signUp(email, password) {
  return function thunk(dispatch, getState) {
    api("/signup", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        const action = signUpSuccess(data.jwt, data.email);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

