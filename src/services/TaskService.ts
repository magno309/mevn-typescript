import { Task } from "@/interfaces/Task";
import axios from "./axios";
import { AxiosResponse } from "axios";

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
    return await axios.get('/task');
}

export const getTaskById = async (id: string) => {
    return await axios.get('/task/' + id);
}

export const createTask = async (task: Task) => {
    return await axios.post('/task', task);
};

export const updateTask = async (id: string, task: Task) => {
    return await axios.put("/task/" + id, task);
}

export const deleteTask = async (id: string) => {
    return await axios.delete("/task/" + id);
}