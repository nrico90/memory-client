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
        console.log("hello");
        dispatch(saveAccessToken(data.jwt));
      })
      .catch(err => console.log("err", err));
  };
}

export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}

export function userLoggedIn(token, profile) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: { token: token, profile: profile }
  };
}
