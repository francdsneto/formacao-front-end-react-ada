import { render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter -> Unit Tests", () => {
  test("it should hander Counter component correctly", () => {
    render(<Counter />);

    // const counterValueElement = screen.getByText("0"); // Obtem o elemento pelo text que existe dentro de uma tag
    // expect(counterValueElement).toBeInTheDocument();

    const counterValueElement = screen.getByRole("heading", { level: 1 });
    const increaseButtonElement = screen.getByRole("button", {
      name: "Aumentar",
    });
    const decreaseButtonElement = screen.getByRole("button", {
      name: "Diminuir",
    });

    expect(counterValueElement).toHaveTextContent("0");
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });

  it("should increase counter value when increase button is clicked", async () => {
    // Renderiza o componente
    render(<Counter />);

    // Clicar no botão aumentar para aumentar o valor do contador
    const counterValueElement = screen.getByRole("heading", { level: 1 });
    const increaseButton = screen.getByRole("button", { name: "Aumentar" });

    userEvent.click(increaseButton);

    // Espera que o valor do contador seja 1
    await waitFor(() => {
      expect(counterValueElement).toHaveTextContent("1");
    });
  });

  it("should decrease counter value when decrease button is clicked", async () => {
    // Renderiza o componente
    render(<Counter />);

    // Clicar no botão aumentar para aumentar o valor do contador
    const decreaseButton = screen.getByRole("button", { name: "Diminuir" });

    userEvent.click(decreaseButton);

    // Espera que o valor do contador seja 1
    // await waitFor(() => {
    //   const counterValueElement = screen.getByText("-1", { exact: true });
    //   expect(counterValueElement).toBeInTheDocument();
    // });

    /**
     * Para evitar usar o waitFor poderiamos utilizar no lugar do getByText o findByText, que é um método async que demora 1 segundo para ser renderizado.
     *
     * Obs: Todas as funções getBy podem ser substituidas por findBy
     *
     */
    const counterValueElement = await screen.findByText("-1", { exact: true });
    expect(counterValueElement).toBeInTheDocument();

    /**
     * Existe também as funções queryBy, que retorna um elemento, se exister, caso não, retorna um NULL.
     *
     * A diferneça dele para o get é que no caso do get, caso não encontre, o teste falha, retornando um erro.
     *
     * é possível usar o expect(element).ToBeNull() para esperar que o elemento seja nulo.
     */
  });
});
