import {Request, Response} from "express";
import { user, User } from "../models/user";

const store = new User();

export const index = async (_req: Request, res: Response) => {
  const allUser = await store.index();
  res.json(allUser);
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const singleUser = await store.show(id);
    res.json(singleUser);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const user: user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
    };
    const newUser = await store.create(user);
    res.json(newUser);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await store.delete(id);
  res.json(user);
};

export const authenticate =async (req: Request, res: Response) => {
  try {
    const user = {
      username: req.body.username,
      password: req.body.password,
    };
    const existingUser = await store.authenticate(user);
    res.json(existingUser);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};