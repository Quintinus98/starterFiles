import { User, user } from "../models/user";

const userStore = new User();


describe("User Model", () => {
  it("should have an index method", () => {
    expect(userStore.index).toBeDefined();
  });
  it("index method should return a list of products",async () => {
    const result = await userStore.index();
    expect(result).toEqual([]);
  });
  it("should have an show method", () => {
    expect(userStore.show).toBeDefined();
  });
  it("should have an create method", () => {
    expect(userStore.create).toBeDefined();
  });
  it("should create a new user", async () => {
    const myWeapon: user = {
      firstname: "David",
      lastname: "Obodo",
      username: "Quentinsop",
      password: "mynigga"
    };
    const result = await userStore.create(myWeapon);
    expect(result).toEqual({
      id: 1,
      firstname: "David",
      lastname: "Obodo",
      username: "Quentinsop",
      password: "$2b$10$scuk2DvpOsogBpq6VGr58OiBR5aCn3ZKwxNj8HB52MCAPKKpyDQH.",
    });
  });
  it("should authenticate a user", async () => {
    const myWeapon = {
      username: "Quentinsop",
      password: "mynigga",
    };
    const result = await userStore.authenticate(myWeapon);
    expect(result).toEqual({
      password: "$2b$10$vHD2vtQ0Sv5IB0AYTGtcFOlaN2EeDqg08SwvrYpZstBXBVc6ctXJa",
    });
  });
  it("should have an delete method", () => {
    expect(userStore.delete).toBeDefined();
  });
  it("should delete a user",async () => {
    userStore.delete(1);
    const result = await userStore.index();
    expect(result).toEqual([]);
  });
});