<template>
  <h1>Task form</h1>
  <form @submit.prevent="saveTask()">
    <input
      type="text"
      placeholder="Nombre del cliente"
      v-model="task.clientName"
    />
    <input
      type="text"
      placeholder="Teléfono del cliente"
      v-model="task.clientPhone"
    />
    <input
      type="text"
      placeholder="Dirección del cliente"
      v-model="task.clientAddress"
    />
    <textarea
      rows="3"
      placeholder="Descripción del servicio"
      v-model="task.serviceDescription"
    ></textarea>
    <button>Guardar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      await createTask(this.task);
      this.$router.push({
        name: "tasks",
      });
    },
  },
});
</script>

<style scoped>
</style>