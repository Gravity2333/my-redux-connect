import { SET_HEADER_INFO } from "./constants";

const initialState = {
  headerInfo: "",
};

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HEADER_INFO:
      return {
        ...state,
        headerInfo: action.payload,
      };
    default:
      return state;
  }
}
