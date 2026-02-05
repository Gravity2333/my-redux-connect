import { useContext, useEffect, useState } from "react";
import { _Context } from "../index";
export function useSelector(selector) {
    var store = useContext(_Context);
    var _a = useState(function () {
        return selector(store.getState());
    }), selectedState = _a[0], setSelectedState = _a[1];
    useEffect(function () {
        var unsubscribe = store.subscribe(function () {
            var next = selector(store.getState());
            setSelectedState(next);
        });
        return unsubscribe;
    }, [store, selector]);
    return selectedState;
}
