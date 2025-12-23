<template>
  <div class="row items-center q-gutter-sm justify-center">
    <template v-for="item in props.filterItems" :key="item.label">
      <q-btn
        outline
        rounded
        :color="item.isSelected ? 'primary' : 'grey'"
        size="md"
        :label="item.label"
        @click="handleFilterChange(item.label)"
        class="text-capitalize"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { filterItemProps } from './models';

const props = withDefaults(defineProps<filterItemProps>(), {
  filterItems: () => [],
});
const emit = defineEmits<{
  (e: 'filter-change', label: string): void;
}>();

const handleFilterChange = (label: string) => {
  emit('filter-change', label);
};
</script>
