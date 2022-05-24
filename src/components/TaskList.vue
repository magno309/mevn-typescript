<template>
  <h1>Task List</h1>
  <ul>
      <li v-for="task in taskList" :key="task._id" @click="editTask(task._id)">
          {{ task.serviceDescription }}
      </li>
  </ul>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
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
      console.log(res.data);
      this.taskList = res.data;
    },
    editTask(id: string){
      this.$router.push(`/tasks/${id}`);
    }
  },
  mounted() {
    this.loadTasks();
  },
});
</script>