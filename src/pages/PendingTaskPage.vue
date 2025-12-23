<template>
  <q-page class="container">
    <TaskItems :tasks="allTasks"></TaskItems>
  </q-page>
</template>
<script setup lang="ts">
import TaskItems from 'src/components/TaskItems.vue';
import { useTaskStore } from 'src/stores/task-store';
import { computed } from 'vue';
const taskStore = useTaskStore();
const allTasks = computed(() => taskStore.tasks.filter((t) => !t.completed));
</script>
