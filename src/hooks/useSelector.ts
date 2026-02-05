import { useContext, useEffect, useState } from "react";
import { _Context } from "../index";

export function useSelector(selector: (state: any) => any) {
  const store = useContext(_Context);
  const [selectedState, setSelectedState] = useState(() =>
    selector(store.getState()),
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const next = selector(store.getState());
      setSelectedState(next);
    });

    return unsubscribe;
  }, [store, selector]);

  return selectedState;
}
