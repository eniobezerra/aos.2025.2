import { v4 as uuidV4 } from "uuid";
import tarefas from "../models/tarefa.js";

const obterTodasTarefas = (req, res) => {
  res.send({
    data: tarefas,
  });
};

const obterTarefaPorId = (req, res) => {
  const { tarefaId } = req.params;

  const tarefaRes = tarefas.find((e) => e.id === tarefaId);
  if (!tarefaRes) {
    return res.status(404).send({
      error: "Tarefa não encontrada",
    });
  }
  res.status(200).send({
    data: tarefaRes,
  });
};

const criarTarefa = (req, res) => {
  const { descricao, completa } = req.body;

  if (!descricao || typeof descricao !== "string") {
    res
      .status(400)
      .json({ message: "A descrição é obrigatória e deve ser uma string" });
    return;
  }

  const novaTarefa = {
    id: uuidV4(),
    descricao: descricao,
    completa: completa ?? false,
  };

  tarefas.push(novaTarefa);
  res.status(201).send({
    message: "Tarefa criada com sucesso",
    data: novaTarefa,
  });
};

const atualizarTarefa = (req, res) => {
  const { tarefaId } = req.params;
  const { descricao, completa } = req.body;

  if (!tarefaId) {
    return res.status(404).send({ message: "Forneça o ID da tarefa" });
  }

  const tarefaRes = tarefas.find((e) => e.id === tarefaId);
  if (!tarefaRes) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  if (descricao !== undefined) {
    if (typeof descricao !== "string") {
      return res.status(400).json({ message: "A descrição deve ser uma string" });
    }
    tarefaRes.descricao = descricao;
  }

  if (completa !== undefined) {
    if (typeof completa !== "boolean") {
      return res.status(400).json({ message: "Completed deve ser um booleano" });
    }
    tarefaRes.completa = completa;
  }

  return res.status(200).json({
    message: "Tarefa atualizada com sucesso",
    data: tarefaRes,
  });
};

const deletarTarefa = (req, res) => {
  const { tarefaId } = req.params;

  const tarefaResIndex = tarefas.findIndex((e) => e.id === tarefaId);

  if (tarefaResIndex !== -1) {
    tarefas.splice(tarefaResIndex, 1);
    res.status(200).send({
      message: "Tarefa deletada com sucesso!",
    });
  } else {
    res.status(404).send({
      message: "Erro! Tarefa não encontrada.",
    });
  }
};

export { atualizarTarefa, criarTarefa, deletarTarefa, obterTarefaPorId, obterTodasTarefas };
