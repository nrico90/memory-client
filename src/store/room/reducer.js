const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_GAMEROOMS":
      return action.payload;
    case "NEW_GAMEROOM": {
      console.log("reducer");

      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}
