import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  #loading = signal(false);
  loading = computed(() => this.#loading());
  setLoading(loading: boolean) {
    this.#loading.set(loading);
  }
}
