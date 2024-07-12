import React, { PureComponent } from "react";
import { createContext } from "react";

export const MyConnectContext = createContext({});

export const Provider = React.memo(function ({ store, children }) {
  return (
    <MyConnectContext.Provider value={store}>
      {children}
    </MyConnectContext.Provider>
  );
});

export function connect(
  mapStateToProps = () => ({}),
  mapDispatchToProps = () => ({})
) {
  return (Cpn) => {
    class WrapperCpn extends PureComponent {
      constructor(props = {},context={}) {
        super(props);
        this.state = mapStateToProps(context.getState())||{};
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()));
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const dispatchFunsObj = mapDispatchToProps(this.context.dispatch);
        return (
          <Cpn
            {...(this.props || {})}
            {...(this.state || {})}
            {...(dispatchFunsObj || {})}
          />
        );
      }
    }
    WrapperCpn.contextType = MyConnectContext;
    return WrapperCpn;
  };
}
