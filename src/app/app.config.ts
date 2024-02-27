import { ApplicationConfig, InjectionToken } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app-routing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './interceptors/error.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';

interface Storage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

export const STORAGE_TOKEN = new InjectionToken<Storage>('storage');

const storage: Storage = {
  getItem: (key: string) => localStorage.getItem(key),
  setItem: (key: string, value: string) => localStorage.setItem(key, value),
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    provideAnimations(),
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
    { provide: STORAGE_TOKEN, useValue: storage },
  ],
};
