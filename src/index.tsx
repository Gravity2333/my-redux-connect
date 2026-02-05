import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { Store, Dispatch } from "my-sample-redux";

const _Context = createContext<Store>({} as any);

export function Provider({ children, store }: { children: any; store: Store }) {
  return <_Context.Provider value={store}>{children}</_Context.Provider>;
}

export function connect<StateType = any>(
  mapStateToProps: (state: StateType) => StateType = (v) => v,
  mapDispatchToProps: (dispatch: Dispatch) => any = (v) => v,
) {
  return (Children: any) => () => {
    const store = useContext(_Context);
    const [storeState, setStoreState] = useState<any>(
      mapStateToProps(store.getState()),
    );

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        setStoreState(mapStateToProps(store.getState()));
      });

      return unsubscribe;
    }, []);

    return (
      <Children
        {...{
          ...storeState,
          ...mapDispatchToProps(store.dispatch),
          dispatch: store.dispatch,
        }}
      />
    );
  };
}
