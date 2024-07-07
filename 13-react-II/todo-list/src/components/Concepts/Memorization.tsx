import { useCallback, useMemo, useState } from "react";

interface MemorizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memorization: React.FC<MemorizationProps> = ({
  financialData,
}) => {
  const [showValues, setShowValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, incomes) => {
      console.log("Calculando receitas");

      return (total += incomes);
    }, 0);
  }, [financialData.incomes]);

  /**
   * O useMemo define que o resultado da chamada da função só será diferente se os parâmetros de dependência informados mudarem,
   * caso contrário a função não é executada e o resultado já calculado anteriormente é retornado, independente de re-render na página
   */
  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      console.log("Calculando despesas");
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes]);

  function algumaLogicaAleatoria(desconto: number) {
    console.log(totalOutcomes * (1 - desconto));
  }

  /**
   * O useCallback define que a função passada para ele só será alterada se o parâmetro [de dependencia externa] for alterado.
   * Independente de re-render na página.
   */
  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutcomes * (1 - desconto);
    },
    [totalOutcomes]
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memorization</h1>
      <h2>useMemo</h2>

      <p>{`Total de Recitas: R$ ${showValues ? totalIncomes : "XXXXX"}`}</p>
      <br />
      <p>{`Total de Despesas: R$ ${showValues ? totalOutcomes : "XXXXX"}`}</p>
      <br />
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "Ocultar Valores" : "Mostrar Valores"}
      </button>
    </div>
  );
};
