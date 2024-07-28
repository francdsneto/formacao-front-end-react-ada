import "@testing-library/jest-dom";
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
    await waitFor(() => {
      const counterValueElement = screen.getByText("-1", { exact: true });
      expect(counterValueElement).toBeInTheDocument();
    });
  });
});
