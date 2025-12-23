<template>
  <div class="flex items-center justify-between">
    <div class="text-h6 text-bold q-mb-md">Your Tasks</div>
    <q-badge
      :label="`${props.tasks.length} tasks`"
      class="q-px-md q-py-sm"
      color="grey-12"
      text-color="grey-7"
      rounded
    ></q-badge>
  </div>
  <q-separator></q-separator>
  <div class="q-pa-md">
    <q-list padding>
      <q-item v-for="task in props.tasks" :key="task.id">
        <q-item-section>
          <q-item-label :class="['text-subtitle1', { 'text-strike': task.completed }]">{{
            task.title
          }}</q-item-label>
          <q-item-label class="text-body2" caption>
            Status: {{ task.completed ? 'Completed' : 'Pending' }}
          </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-btn
            :icon="task.completed ? 'refresh' : 'check'"
            flat
            size="sm"
            rounded
            @click="toggleTask(task.id)"
            color="grey"
          >
            <q-tooltip>
              {{ task.completed ? 'Mark as pending' : 'Mark as completed' }}
            </q-tooltip></q-btn
          >
        </q-item-section>
        <q-item-section avatar>
          <q-btn icon="delete" flat size="sm" color="grey" rounded @click="deleteTask(task.id)">
            <q-tooltip>Remove task</q-tooltip></q-btn
          >
        </q-item-section>
      </q-item>
      <q-item v-if="props.tasks.length === 0">
        <q-item-section>
          <q-item-label> No tasks available. Please add a new task. </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script setup lang="ts">
import { useTaskStore } from 'src/stores/task-store';
import type { Task } from './models';

const taskStore = useTaskStore();
const props = withDefaults(defineProps<{ tasks: Task[] }>(), {
  tasks: () => [],
});

function deleteTask(id: number) {
  taskStore.deleteTask(id);
}
function toggleTask(id: number) {
  taskStore.toggleTask(id);
}
</script>
<style scoped></style>
