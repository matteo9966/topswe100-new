import { Injectable, computed, signal } from '@angular/core';
import { ListItem } from '../core/interfaces/listItem.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  #problemList = signal<ListItem[]>([]);
  problemList = computed(() => this.#problemList());
  setList(list: ListItem[]) {
    this.#problemList.set(list);
  }
}
