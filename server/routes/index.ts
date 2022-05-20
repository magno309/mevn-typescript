import { Router } from "express";
import Task from "../models/Task";


const router = Router();

router.get("/task", async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

router.post("/task", async (req, res) => {
    const { clientName, clientPhone, clientAddress, serviceDescription } = req.body;
    const task = new Task({ clientName, clientPhone, clientAddress, serviceDescription });
    await task.save();
    res.json(task);
});

router.get("/task/:id", async (req, res) => {
    //res.send("Obteniendo tarea por id!");
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }
        res.send(task);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.delete("/task/:id", async (req, res) => {
    //res.send("Eliminando tarea!");
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }
        return res.json(task);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.put("/task/:id", async (req, res) => {
    //res.send("Modificar tarea!");
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }
        res.json(updatedTask);
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default router;