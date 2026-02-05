import { SET_HEADER_INFO } from "./constants";

export function setHeaderinfoAction(info) {
  return {
    type: SET_HEADER_INFO,
    payload: info,
  };
}

export function fetchHeaderInfo() {
  return async (dispatch, getState) => {
    const headerInfo = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("HEADER INFO FROM MOCK SERVER!!!");
      }, 2000);
    });

    dispatch(setHeaderinfoAction(headerInfo));
  };
}
