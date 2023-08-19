import { customRef } from "vue";

export type EventEmitter = Ref & {
  emit: (data: unknown) => void
}

export const createEventEmitter = (event: string, val?: unknown): EventEmitter => {
  let _trigger: () => void;
  return Object.create(
    customRef((track, trigger) => {
      _trigger = trigger
      return {
        get() {
          track();
          return val;
        },
        set() {
          return false;
        }
      }
    }),
    {
      emit: {
        value(data: unknown): void {
          console.debug(`emit ${event}`, data);

          val = data;
          _trigger && _trigger();
        }
      }
    }
  )
}