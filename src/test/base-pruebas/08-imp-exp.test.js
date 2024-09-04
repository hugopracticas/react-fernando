import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe el ID", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe de retornar un arreglo", () => {
    const ownerDC = "DC";
    const ownerMarvel = "Marvel";
    const filterDC = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];
    const filterMArvel = [
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ];

    const owner = getHeroesByOwner(ownerDC);
    expect(owner).toEqual(filterDC);
    expect(owner.length).toBe(filterDC.length);

    const ownerM = getHeroesByOwner(ownerMarvel);
    expect(ownerM).toEqual(filterMArvel);
    expect(ownerM.length).toBe(filterMArvel.length);
  });
});
