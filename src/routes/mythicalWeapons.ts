import express, { Router } from "express";
import {index, show, create, destroy } from "../handlers/mythical_weapons";

const router: Router = express.Router();


router.get("/", index);
router.get("/:id", show);
router.post("/", create);
router.delete("/:id", destroy);

export default router;