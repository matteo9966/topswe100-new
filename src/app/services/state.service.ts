import {
  Injectable,
  computed,
  inject,
  signal,
  WritableSignal,
  effect,
  Signal,
} from '@angular/core';
import {
  ListItem,
  ListItemWithState,
} from '../core/interfaces/listItem.interface';
import storageKeys from '../core/constants/storageKeys';
import { STORAGE_TOKEN } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private completed: WritableSignal<Record<string, boolean>> = signal({});
  private storage = inject(STORAGE_TOKEN);
  #problemList = signal<ListItem[]>([]);
  setList(list: ListItem[]) {
    this.#problemList.set(list);
  }

  problemsWithCompletedStatus: Signal<ListItemWithState[]> = computed(() => {
    const problemList = this.#problemList();
    const completedMap = this.completed();
    return problemList.map((p) => {
      return completedMap[p.href]
        ? { ...p, completed: completedMap[p.href] }
        : { ...p, completed: false };
    });
  });

  constructor() {
    this.getStorageCompletedTasks();
    this.keepStorageUpToDate();
  }

  /**
   * @description this function just initializes the storage completed tasks
   * @returns
   */
  private getStorageCompletedTasks() {
    const completedTasks = this.storage.getItem(storageKeys.COMPLETED_TASKS);
    try {
      if (!completedTasks) return;
      const map = JSON.parse(completedTasks);
      this.completed.set(map);
    } catch (error) {
      console.log(error);
    }
  }

  updateCompletedTasks(key: string, completed: boolean) {
    this.completed.update((map) => {
      const newMap = { ...map };
      if (!completed) {
        delete newMap[key];
      } else {
        newMap[key] = true;
      }
      return newMap;
    });
  }

  private keepStorageUpToDate() {
    effect(() => {
      const updated = this.completed();
      this.storage.setItem(
        storageKeys.COMPLETED_TASKS,
        JSON.stringify(updated),
      );
    });
  }
}
