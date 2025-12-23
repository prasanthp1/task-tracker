<template>
  <q-card flat class="shadow-5 card-border">
    <q-card-section class="q-ma-none">
      <div class="row items-center">
        <div class="col-md-6 col-sm-12">
          <div class="flex items-center q-gutter-x-md">
            <q-icon name="fas fa-tasks" color="primary" size="md"></q-icon>
            <h5 class="text-bold">Task Tracker</h5>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="flex items-center justify-end q-gutter-x-xl">
            <div v-for="item in props.statusBar" :key="item?.label" class="column items-center">
              <div class="stat-value text-primary">{{ item.count }}</div>
              <div class="stat-label text-grey-7">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import type { StatusItemProps } from './models';

const props = withDefaults(defineProps<StatusItemProps>(), {
  statusBar: () => [],
});
</script>
<style scoped>
.stat-value {
  font-size: 1.6rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
