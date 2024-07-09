import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";

/**
 * Componente Funcional do React
 * @returns html
 */
function App() {
  return (
    <>
      <Header />
      <Products />
      <GlobalStyles />
    </>
  );
}

export default App;
