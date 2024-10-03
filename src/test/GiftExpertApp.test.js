import { render, renderHook, screen } from "@testing-library/react";
import GiftExpertApp from "../GiftExpertApp";

describe("Pruebas en GiftExpertApp", () => {
  test("Debe de de renderizar un titulo", () => {
    render(<GiftExpertApp />);
    screen.debug();
    expect(screen.getByText("Gift Expert app"));
  });

  test("Debe ", () => {
    const res = renderHook(() => GiftExpertApp());
  });
});
