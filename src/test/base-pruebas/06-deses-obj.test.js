import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Prueba en 06-deses", () => {
  test("useContext debe de retornar un objeto", () => {
    const clave = "3123";
    const edad = 32;

    const response = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const deses = usContext({ clave, edad });
    expect(response).toEqual(deses);
  });
});
