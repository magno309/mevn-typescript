<template>
  <h1>Task Details</h1>
  <form @submit.prevent="updateTask()">
    <input
      type="text"
      placeholder="Nombre del cliente"
      v-model="currentTask.clientName"
    />
    <input
      type="text"
      placeholder="Teléfono del cliente"
      v-model="currentTask.clientPhone"
    />
    <input
      type="text"
      placeholder="Dirección del cliente"
      v-model="currentTask.clientAddress"
    />
    <textarea
      rows="3"
      placeholder="Descripción del servicio"
      v-model="currentTask.serviceDescription"
    ></textarea>
    <button>Guardar</button>
  </form>
</template>

<script lang="ts">
import { getTaskById, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";
import { Task } from "@/interfaces/Task";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTaskById(id);
      this.currentTask = res.data;
    },
    async updateTask() {
      updateTask(this.currentTask._id, this.currentTask);
      this.$router.push({
        name: "tasks",
      });
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
