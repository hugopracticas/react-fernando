import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("getSaludo Should return Hola Hugo", () => {
    const name = "Hugo";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
