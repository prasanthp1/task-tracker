<template>
  <q-page class="container">
    <TaskHeader :status-bar="statusBar" />
    <TaskContainer class="q-mt-md" />
    <q-card flat class="shadow-5 card-border q-mt-md"> <router-view /></q-card>
  </q-page>
</template>

<script setup lang="ts">
import type { StatusItem } from 'src/components/models';
import TaskContainer from 'src/components/TaskContainer.vue';
import TaskHeader from 'src/components/TaskHeader.vue';
import { useTaskStore } from 'src/stores/task-store';
import { computed } from 'vue';

const taskStore = useTaskStore();
const statusBar = computed<StatusItem[]>(() => {
  const total = taskStore.tasks.length;
  const completed = taskStore.tasks.filter((t) => t.completed).length;
  const pending = taskStore.tasks.filter((t) => !t.completed).length;

  return [
    { label: 'Total Tasks', count: total },
    { label: 'Completed', count: completed },
    { label: 'Pending', count: pending },
  ];
});
</script>
