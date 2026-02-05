import React from "react";
import { Store, Dispatch } from "my-sample-redux";
export declare function Provider({ children, store }: {
    children: any;
    store: Store;
}): React.JSX.Element;
export declare function connect<StateType = any>(mapStateToProps?: (state: StateType) => StateType, mapDispatchToProps?: (dispatch: Dispatch) => any): (Children: any) => () => React.JSX.Element;
