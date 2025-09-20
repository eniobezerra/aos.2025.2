import { Router } from "express";
import { atualizarTarefa, criarTarefa, deletarTarefa, obterTarefaPorId, obterTodasTarefas } from "../controllers/tarefaController.js";

const router = Router();

router.get("/", obterTodasTarefas);
router.get("/:tarefaId", obterTarefaPorId);
router.post("/", criarTarefa);
router.put("/:tarefaId", atualizarTarefa);
router.delete("/:tarefaId", deletarTarefa);

export default router;