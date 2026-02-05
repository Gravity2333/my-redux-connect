# 手动实现一个 react-redux 的 connect 与 Provider

本文演示如何**不依赖 react-redux**，手动实现一个精简版的 `Provider` 和 `connect`，帮助理解其核心原理。

---

## 一、整体思路

react-redux 的核心只有三件事：

1. **Context**
   - 用来在组件树中传递 `store`
2. **Provider**
   - 将 `store` 注入到 Context
3. **connect**
   - 从 Context 中取出 `store`
   - 订阅 `store` 更新
   - 将 `state` 和 `dispatch` 映射为组件 props

---

## 二、Provider 实现

### 作用
- 接收 Redux `store`
- 通过 React Context 向下传递

```ts
import React, { createContext } from "react";
import { Store } from "my-sample-redux";

const _Context = createContext<Store>({} as any);

export function Provider({
  children,
  store,
}: {
  children: any;
  store: Store;
}) {
  return <_Context.Provider value={store}>{children}</_Context.Provider>;
}
```

---

## 三、connect 实现

### 使用方式示例

```ts
const ConnectedComponent = connect(
  (state) => ({ count: state.count }),
  (dispatch) => ({
    inc: () => dispatch({ type: "INC" }),
  })
)(Component);
```

---

### connect 核心代码

```ts
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { Dispatch, Store } from "my-sample-redux";

export function connect<StateType = any>(
  mapStateToProps: (state: StateType) => any = (v) => v,
  mapDispatchToProps: (dispatch: Dispatch) => any = (v) => v
) {
  return (Children: any) => () => {
    const store = useContext(_Context);

    const [storeState, setStoreState] = useState<any>(
      mapStateToProps(store.getState())
    );

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        setStoreState(mapStateToProps(store.getState()));
      });

      return unsubscribe;
    }, []);

    return (
      <Children
        {...storeState}
        {...mapDispatchToProps(store.dispatch)}
        dispatch={store.dispatch}
      />
    );
  };
}
```

---

## 四、实现细节拆解

### 1️⃣ 为什么要 useContext

```ts
const store = useContext(_Context);
```

- 避免 props 层层传递
- Provider / Consumer 解耦

---

### 2️⃣ 为什么要 subscribe

```ts
store.subscribe(() => {
  setStoreState(mapStateToProps(store.getState()));
});
```

- Redux 状态变化 ≠ React 自动更新
- 必须手动触发 `setState`

---

### 3️⃣ 为什么 mapStateToProps 会导致重新渲染

- 每次 dispatch：
  - subscribe 回调执行
  - setState
  - 组件重新渲染

👉 **这也是 react-redux 内部要做性能优化的原因**

---

## 五、与 react-redux 的差距

当前实现是 **教学版**，还缺少：

- `shouldComponentUpdate` / `useSyncExternalStore`
- `shallowEqual` 对比
- props 合并优化
- hooks API（`useSelector` / `useDispatch`）
- 多 Context 隔离

但**核心原理已经完整覆盖**。

---

## 六、一句话总结

> react-redux 并不神秘，本质就是：
>
> **Context + subscribe + setState**

---

Happy hacking 🚀
