import { screen, fireEvent, render } from "@testing-library/react";
import CounterApp from "../CounterApp";

describe("Test in CounterApp", () => {
  const value = 100;
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100", () => {
    const { getByTestId } = render(<CounterApp value={value} />);
    expect(getByTestId("test-value").innerHTML).toBe("100");
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1", () => {
    const { getByTestId } = render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    //screen.debug();
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("Debe de funcionar el boton de reset", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //fireEvent.click(screen.getByText("RESET"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(value)).toBeTruthy;
  });
});
