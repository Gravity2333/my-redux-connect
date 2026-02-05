var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
export var _Context = createContext({});
export function Provider(_a) {
    var children = _a.children, store = _a.store;
    return React.createElement(_Context.Provider, { value: store }, children);
}
export function connect(mapStateToProps, mapDispatchToProps) {
    if (mapStateToProps === void 0) { mapStateToProps = function (v) { return v; }; }
    if (mapDispatchToProps === void 0) { mapDispatchToProps = function (v) { return v; }; }
    return function (Children) {
        return React.memo(function (props) {
            var store = useContext(_Context);
            var _a = useState(mapStateToProps(store.getState())), storeState = _a[0], setStoreState = _a[1];
            useEffect(function () {
                var unsubscribe = store.subscribe(function () {
                    setStoreState(mapStateToProps(store.getState()));
                });
                return unsubscribe;
            }, []);
            return (React.createElement(Children, __assign({}, storeState, mapDispatchToProps(store.dispatch), { dispatch: store.dispatch }, (props || {}))));
        });
    };
}
export * from './hooks/useDispatch';
export * from './hooks/useSelector';
