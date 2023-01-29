import { MythicalWeaponStore, Weapon } from "../models/mythical_weapons";

const store = new MythicalWeaponStore();


describe("Mythical Weapon Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });
  it("index method should return a list of products",async () => {
    const result = await store.index();
    expect(result).toEqual([]);
  });
  it("should have an show method", () => {
    expect(store.show).toBeDefined();
  });
  it("should have an create method", () => {
    expect(store.create).toBeDefined();
  });
  it("should create a mythical weapon", async () => {
    const myWeapon = {
      name: "Saber",
      type: "light",
      weight: 2
    }
    const result = await store.create(myWeapon);
    expect(result).toEqual({
      id: 1,
      name: "Saber",
      type: "light",
      weight: 2
    })
  })
  it("should have an delete method", () => {
    expect(store.delete).toBeDefined();
  });
  it("should delete a mythical weapon",async () => {
    store.delete(1);
    const result = await store.index()
    expect(result).toEqual([]);
  })
});