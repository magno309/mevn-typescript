<template>
  <div class="container mt-3">
    <form @submit.prevent="saveTask()">
      <div class="row formContainer">
        <legend class="text-center h3 mb-3">Añadir servicio</legend>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre del cliente"
            v-model="task.clientName"
          />
          <input
            type="text"
            class="form-control mt-3"
            placeholder="Teléfono del cliente"
            v-model="task.clientPhone"
          />
          <input
            type="text"
            class="form-control mt-3"
            placeholder="Dirección del cliente"
            v-model="task.clientAddress"
          />
        </div>
        <div class="col-md-6">
          <textarea
            rows="5"
            class="form-control"
            placeholder="Descripción del servicio"
            v-model="task.serviceDescription"
          ></textarea>
        </div>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-success btn-lg mt-3">
          Guardar
        </button>
      </div>
    </form>
  </div>
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
.formContainer {
  background: #f6f6f6;
  border: 1px solid #ccc;
  overflow: hidden;
  padding: 10px;
}
</style>