import React from "react";
import { Store, Dispatch } from "my-sample-redux";
export declare const _Context: React.Context<Store<any, import("my-sample-redux").Action>>;
export declare function Provider({ children, store }: {
    children: any;
    store: Store;
}): React.JSX.Element;
export declare function connect<StateType = any>(mapStateToProps?: (state: StateType) => StateType, mapDispatchToProps?: (dispatch: Dispatch) => any): (Children: any) => React.MemoExoticComponent<(props: any) => React.JSX.Element>;
export * from './hooks/useDispatch';
export * from './hooks/useSelector';
