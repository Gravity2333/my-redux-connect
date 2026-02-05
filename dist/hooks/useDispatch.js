import { useContext } from "react";
import { _Context } from "../index";
export function useDispatch() {
    var store = useContext(_Context);
    return store.dispatch;
}
