import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductType } from "../Products/Products";
import { Cart } from "./Cart";
import { removeProduct } from "../../redux/Cart/cart-slice";

const products: ProductType[] = [
  {
    id: 1,
    title: "teste 1",
    price: 10,
    description: "testing 1",
    category: "cartegory",
    image: "",
    rating: {
      rate: 10,
      count: 10,
    },
  },
  {
    id: 2,
    title: "teste 2",
    price: 10,
    description: "testing 2",
    category: "cartegory",
    image: "",
    rating: {
      rate: 10,
      count: 10,
    },
  },
];

/**
 * * Mock: Tornar a biblioteca react-redux algo fake
 */

const mockDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit Tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total", { exact: true });
    const cartListElement = screen.getByRole("list");

    /**
     * screen.debug(cartListElement); // Ver o que existe dentro dos elementos
     */

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });
});

it("should render a cart with two products", () => {
  render(<Cart showCart={true} cart={products} />);

  const listItemElement = screen.getAllByRole("listitem");

  expect(listItemElement).toHaveLength(2);

  const firstProductTitleElement = screen.getByText(products[0].title);
  const secondProductTitleElement = screen.getByText(products[1].title);

  expect(firstProductTitleElement).toHaveTextContent("teste 1");
  expect(secondProductTitleElement).toHaveTextContent("teste 2");
});

it("should remove product when remove button is clicked", async () => {
  render(<Cart showCart={true} cart={[products[0]]} />);

  const removeProductButton = screen.getByTestId("remover");

  await userEvent.click(removeProductButton);
  expect(mockDispatch).toHaveBeenCalled();
  expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
});
