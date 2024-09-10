import { getByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";
describe("Pruebas en <FistApp2 />", () => {
  const title = "Hola, soy Goku";
  const subTitle = "Soy un subtitulo";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test("debe de mostrar el mensaje Hola soy Hugo", () => {
    render(<FirstApp title={title} />);
    //screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe de hacer match con el titulo", () => {
    const { getByTestId } = render(<FirstApp title={title} />);
    expect(getByTestId("test-title").innerHTML).toBe("Hola Hugo");
  });

  test("debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "Hola Hugo"
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const { getByText, getByTestId } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getByText(subTitle)).toBeTruthy();
    expect(getByTestId("test-subtitle").innerHTML).toBe(subTitle);
  });
});
