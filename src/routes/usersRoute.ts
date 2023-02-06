import express, { Router } from "express";
import {index, show, create, destroy, authenticate } from "../handlers/user";

const router: Router = express.Router();


router.get("/", index);
router.get("/:id", show);
router.post("/", create);
router.post("/auth", authenticate);
router.delete("/:id", destroy);

export default router;