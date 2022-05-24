<template>
  <div class="container mt-3">
    <form @submit.prevent="updateTask()">
      <div class="row formContainer">
        <legend class="text-center h3 mb-3">Detalles del servicio</legend>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre del cliente"
            v-model="currentTask.clientName"
          />
          <input
            type="text"
            class="form-control mt-3"
            placeholder="Teléfono del cliente"
            v-model="currentTask.clientPhone"
          />
          <input
            type="text"
            class="form-control mt-3"
            placeholder="Dirección del cliente"
            v-model="currentTask.clientAddress"
          />
        </div>
        <div class="col-md-6">
          <textarea
            rows="5"
            class="form-control"
            placeholder="Descripción del servicio"
            v-model="currentTask.serviceDescription"
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
      await updateTask(this.currentTask._id, this.currentTask);
      this.$router.push('/');
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
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
