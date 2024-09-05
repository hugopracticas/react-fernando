import { getImagen } from "../../base-pruebas/11-async-await";

describe("Pruebas en 11-async-awai", () => {
  test("getImagen debe de retornar un URL de la imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });

  /*test("getImagen debe de retornar un error sino tenemos la apiKey", async () => {
    const resp = await getImagen();
    console.log(resp);
    expect(resp).toBe("No se encontro la imagen");
  });*/
});
