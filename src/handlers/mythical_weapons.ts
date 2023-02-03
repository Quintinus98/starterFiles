import express, {Request, Response} from "express";
import { Weapon, MythicalWeaponStore } from "../models/mythical_weapons";

const store = new MythicalWeaponStore();

const index = async (_req: Request, res: Response) => {
  const weapons = await store.index();
  res.json(weapons);
};

const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const weapons = await store.show(id);
    res.json(weapons);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const weapon: Weapon = {
      name: req.body.name,
      type: req.body.type,
      weight: parseInt(req.body.weight)
    };
    const newWeapon = await store.create(weapon);
    res.json(newWeapon);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const weapons = await store.delete(id);
  res.json(weapons);
};

const mythical_weapons_routes = (app: express.Application) => {
  app.get("/mythical-weapons", index);
  app.get("/mythical-weapons/:id", show);
  app.post("/mythical-weapons/", create);
  app.delete("/mythical-weapons/:id", destroy);
};

export default mythical_weapons_routes;