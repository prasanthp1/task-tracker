import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        children: [
          {
            path: '',
            name: 'AllTasks',
            component: () => import('src/pages/AllTaskPage.vue'),
          },
          {
            path: 'completed',
            name: 'CompletedTasks',
            component: () => import('src/pages/CompletedTaskPage.vue'),
          },
          {
            path: 'pending',
            name: 'PendingTasks',
            component: () => import('src/pages/PendingTaskPage.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
