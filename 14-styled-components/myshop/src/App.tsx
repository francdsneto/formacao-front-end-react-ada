import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { Provider } from "react-redux";
import { store } from "./redux/store";

/**
 * Componente Funcional do React
 * @returns html
 */
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Products />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
