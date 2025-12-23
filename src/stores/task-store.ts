import { defineStore, acceptHMRUpdate } from 'pinia';
import { LocalStorage } from 'quasar';
import type { Task } from 'src/components/models';
import { useNotifyStore } from './notify-store';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: LocalStorage.getItem<Task[]>('tasks') || [],
  }),

  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    pendingTask: (state) => state.tasks.filter((task) => !task.completed),
  },

  actions: {
    addTask(title: string) {
      const notify = useNotifyStore();
      this.tasks.push({
        id: Date.now(),
        title,
        completed: false,
      });
      notify.success('Task added successfully');
      this.persist();
    },
    toggleTask(id: number) {
      const notify = useNotifyStore();
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.completed = !task.completed;
      notify.info(task?.completed ? 'Task marked as completed' : 'Task marked as pending');
      this.persist();
    },
    deleteTask(id: number) {
      const notify = useNotifyStore();
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.persist();
      notify.error('Task deleted');
    },

    persist() {
      LocalStorage.set('tasks', this.tasks);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
