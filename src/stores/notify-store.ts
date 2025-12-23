import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import type { NotifyType } from 'src/components/models';
import type { QNotifyOptions } from 'quasar';
export const useNotifyStore = defineStore('notify', {
  actions: {
    show(message: string, type: NotifyType = 'info', options?: Partial<QNotifyOptions>) {
      Notify.create({
        message,
        type,
        position: 'top-right',
        timeout: 2000,
        ...options,
      });
    },

    success(message: string) {
      this.show(message, 'positive');
    },

    error(message: string) {
      this.show(message, 'negative');
    },

    info(message: string) {
      this.show(message, 'info');
    },

    warning(message: string) {
      this.show(message, 'warning');
    },
  },
});
