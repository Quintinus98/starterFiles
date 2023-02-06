import {Request, Response} from "express";
import { Weapon, MythicalWeaponStore } from "../models/mythical_weapons";

const store = new MythicalWeaponStore();

export const index = async (_req: Request, res: Response) => {
  const weapons = await store.index();
  res.json(weapons);
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const weapons = await store.show(id);
    res.json(weapons);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const create = async (req: Request, res: Response) => {
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

export const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const weapons = await store.delete(id);
  res.json(weapons);
};