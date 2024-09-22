import { getByTestId, render, screen } from "@testing-library/react";
import GifItem from "../../components/GifItem";

describe("Test en <GifItem />", () => {
  const title = "Avatar";
  const url = "https://avatar.com/avatar.jpg";

  test("Should match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con la URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    //expect(screen.getByRole("img").src).toBe(url);
    //expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar el titulo", () => {
    const { getByTestId } = render(<GifItem title={title} url={url} />);
    //screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });
});
