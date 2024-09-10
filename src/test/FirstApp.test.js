import { getByText, render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";
describe("Pruebas en <FistApp />", () => {
  /*test("debe de hacer match con el snapshot", () => {
    const title = "Hola soy Hugo";
    const { container } = render(<FirstApp title={title} />);
    //console.log(container);
    expect(container).toMatchSnapshot();
  });*/

  test("debe de mostrar el titulo en un <H1></H1>", () => {
    const title = "Hola soy Hugo";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain("Hola Hugo");
    expect(getByTestId("test-title").innerHTML).toBe("Hola Hugo");
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola soy Hugo";
    const subTitle = "Soy el subtitulo de este componente";
    const { getByText, getByTestId } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getByText(subTitle)).toBeTruthy();
    expect(getByTestId("test-subtitle").innerHTML).toBe(subTitle);
  });
});
