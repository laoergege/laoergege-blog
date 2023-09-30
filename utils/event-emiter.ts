import { customRef } from "vue";

/**
 * EventEmitter 基于 vue ref 扩展 emit
 * let e$ = createEventEmitter(event, initVal)
 * e$.value
 * e$.emit(val)
 */

export type EventEmitter<T> = Ref<T> & {
  emit: (data: T) => void
}

export const createEventEmitter = <T>(event: string, val: T | null = null): EventEmitter<T> => {
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
        value(data: T): void {
          console.debug(`emit ${event}`, data);

          val = data;
          _trigger && _trigger();
        }
      }
    }
  )
}