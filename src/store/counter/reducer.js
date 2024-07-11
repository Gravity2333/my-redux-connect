import { ADD_NUM, SUB_NUM } from "./constants";

const initialState = {
  num: 0,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUM:
      return {
        ...state,
        num: state.num + action.paylaod,
      };
    case SUB_NUM:
      return {
        ...state,
        num: state.num - action.paylaod,
      };
    default:
      return state;
  }
}
