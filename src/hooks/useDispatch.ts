import React, { useContext } from "react";
import { _Context } from "../index";

export function useDispatch() {
  const store = useContext(_Context);
  return store.dispatch;
}
