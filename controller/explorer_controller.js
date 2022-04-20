import { Router } from "express";
import ExplorerService from "../services/explorer_service.js";

const router = Router();

router.get("/", (_, res) => {
  const explorerList = ExplorerService.explorerList;

  res.status(200).json(explorerList);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = ExplorerService.getExplorerById(id);

  res.json(user);
});

router.post("/register", (req, res) => {
  const body = req.body;
  const user = ExplorerService.createExplorer(body);

  res.json(user);
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const user = ExplorerService.updateExplorer(body);

  res.json(user);
});

router.delete("/:id", (req, res) => {
  const body = req.body;
  const user = ExplorerService.deleteExplorer(body);

  res.json(user);
});

export default router;
