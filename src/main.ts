import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig).catch((e) =>
  console.log('error bootstrap', e),
);
