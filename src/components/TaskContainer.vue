<template>
  <q-card flat class="shadow-5 card-border">
    <q-card-section>
      <div class="text-h6 text-center text-bold q-mb-md">Add New Task</div>
      <div class="row justify-center q-gutter-md">
        <div class="col-lg-6 col-md-8 col-12">
          <TaskInput></TaskInput>
        </div>
        <div class="col-lg-8 col-md-8 col-12">
          <TaskFilterContainer
            :filterItems="filterItems"
            @filter-change="onFilterChange"
          ></TaskFilterContainer>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import TaskInput from './TaskInput.vue';
import TaskFilterContainer from './TaskFilterContainer.vue';
import { ref } from 'vue';
import type { filterItem } from './models';
import { useRouter } from 'vue-router';
const router = useRouter();
const filterItems = ref<filterItem[]>([
  {
    label: 'all',
    isSelected: true,
  },
  {
    label: 'completed',
    isSelected: false,
  },
  {
    label: 'pending',
    isSelected: false,
  },
]);

const onFilterChange = async (label: string) => {
  filterItems.value = filterItems.value.map((item) => ({
    ...item,
    isSelected: item.label === label,
  }));
  await router.push(`/${label === 'all' ? '' : label}`);
};
</script>
