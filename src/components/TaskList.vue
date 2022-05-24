<template>
  <div class="container">
    <h1>Lista de servicios</h1>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">Completado</th>
          <th scope="col">Cliente</th>
          <th scope="col">Dirección</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-active" v-for="task in taskList" :key="task._id">
          <td>
            <span
              :class="
                task.serviceDone ? 'badge bg-success' : 'badge bg-warning'
              "
              @click="toggleDoneTask(task)"
            >
              {{ task.serviceDone ? "Termiando" : "Pendiente" }}
            </span>
          </td>
          <td>{{ task.clientName }}</td>
          <td>{{ task.clientAddress }}</td>
          <td>{{ task.clientPhone }}</td>
          <td>
            <button
              type="button"
              class="btn btn-success"
              @click="editTask(task._id)"
            >
              Detalles
            </button>
            <button
              type="button"
              class="btn btn-danger ml-1"
              @click="deleteTask(task._id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTasks, updateTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      taskList: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.taskList = res.data;
    },
    editTask(id: string) {
      this.$router.push(`/tasks/${id}`);
    },
    async deleteTask(id: string) {
      await deleteTask(id);
      this.loadTasks();
    },
    async toggleDoneTask(task: Task) {
      task.serviceDone = !task.serviceDone;
      await updateTask(task._id, task);
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>