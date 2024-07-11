import { Provider } from "./lib/my-connect";
import About from "./pages/About";
import Header from "./pages/Header";
import Home from "./pages/Home";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Home/>
      <About />
    </Provider>
  );
}

export default App;
