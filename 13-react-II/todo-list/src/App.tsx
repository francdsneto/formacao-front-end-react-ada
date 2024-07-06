// import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  // const [toggle, setToggle] = useState(false);

  // /**
  //  * * Use effect é disparado quando alguma dependencia que a função monitora é alterada
  //  * * Possui 2 parametros, uma função de callback, e o array de dependências
  //  *
  //  * * Obs: É muito importante passar o array de dependências, mesmo que vazio, caso contrário o effect ficará disparando repetidamente o que pode causar
  //  * * problemas no navegador como travamentos ou lentidão.
  //  *
  //  * * - 3 métodos do ciclo de vida chamam o hook useEffect
  //  *
  //  * * 1 - componentDidMount - Quando o componente é montado
  //  * * 2 - componentDidUpdate - Se uma variável do array de dependências for atualizada
  //  * * 3 - componentWillUmount - Quando o componente será dismontado através de uma função de retorno da função passada por parametro do useEffect
  //  */
  // useEffect(() => {
  //   console.log("Executando a função do useEffect");

  //   // componenteWillUmount => CleanUP function
  //   return () => {
  //     console.log(
  //       "Isso será executado quando o componente app for desmontado da tela"
  //     );
  //   };
  // }, [toggle]);

  return (
    <>
      <Header />;
      <Tasks />
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </>
  );
}

export default App;
