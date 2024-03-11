import { ApplicationConfig, InjectionToken, inject } from '@angular/core';
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
import { provideClientHydration } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Storage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

export const STORAGE_TOKEN = new InjectionToken<Storage>('storage', {
  factory: () => {
    const platformID = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformID);

    if (isBrowser) {
      return {
        getItem: (key: string) => localStorage.getItem(key),
        setItem: (key: string, value: string) =>
          localStorage.setItem(key, value),
      };
    }

    return {
      getItem: (key: string) => null,
      setItem: (key: string, value: string) => null,
    };
  },
});

// const storage: Storage = {
//   getItem: (key: string) => localStorage.getItem(key),
//   setItem: (key: string, value: string) => localStorage.setItem(key, value),
// };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    provideAnimations(),
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
    provideClientHydration(),
  ],
};
