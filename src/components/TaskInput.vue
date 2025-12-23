<template>
  <q-input
    ref="taskInputRef"
    class="task-input"
    v-model="task"
    placeholder="Add new task"
    rounded
    outlined
    @keyup.enter="submit"
  >
    <template #append>
      <q-icon name="add_circle" color="primary" size="md" class="cursor-pointer" @click="submit" />
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { QInput } from 'quasar';
import { useTaskStore } from 'src/stores/task-store';
import { ref } from 'vue';
const store = useTaskStore();
const taskInputRef = ref<QInput | null>(null);
const task = ref('');

function submit() {
  if (!task.value.trim()) return;
  store.addTask(task.value);
  taskInputRef.value?.blur();
  task.value = '';
}
</script>

<style scoped></style>
