import { FormEvent, useRef } from "react";

export const Refs: React.FC = () => {
  /**
   * Essa abordagem é mais performatica
   *
   * Chamda de uncontrolled, diferentemente da tecnica de usar value e onChange no nas entradas do form, que se chama controlled
   *
   * Essa tecnica é mais performatica pois só obtem os valores inseridos quando é feito o submit, evitando muitos re-renders da página
   * a medida que os campos vão sendo preenchidos.
   *
   * Existem bibliotecas que adotam essa abordagem para lidar com formulários, como a react-hook-form
   */
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPassRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault(); // Evita que a página seja recarregada no submit

    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPassRef.current?.value);
  }

  return (
    <form style={{ padding: "2rem" }} onSubmit={handleOnSubmit}>
      <h1>useRef</h1>

      <input
        type="text"
        name=""
        id=""
        placeholder="Nome completo"
        ref={inputNameRef}
      />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputPassRef} />
      <br />
      <button type="submit">Submeter</button>
    </form>
  );
};
