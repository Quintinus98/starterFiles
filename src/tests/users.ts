import { User, user } from "../models/user";

const store = new User();


describe("User Model", () => {
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
  it("should create a new user", async () => {
    const myWeapon: user = {
      firstname: "David",
      lastname: "Obodo",
      username: "Quentinsop",
      password: "mynigga",
    };
    const result = await store.create(myWeapon);
    expect(result).toEqual({
      id: 1,
      firstname: "David",
      lastname: "Obodo",
      username: "Quentinsop",
      password: "$2b$10$vHD2vtQ0Sv5IB0AYTGtcFOlaN2EeDqg08SwvrYpZstBXBVc6ctXJa",
    });
  });
  it("should have an delete method", () => {
    expect(store.delete).toBeDefined();
  });
  it("should delete a user",async () => {
    store.delete(1);
    const result = await store.index();
    expect(result).toEqual([]);
  });
});