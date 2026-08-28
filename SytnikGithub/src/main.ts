import {bootstrapApplication} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app/app.component';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/routes';

bootstrapApplication(AppComponent,
  {
    providers:[
      provideZoneChangeDetection(),importProvidersFrom(RouterModule.forRoot(routes),
        BrowserAnimationsModule)]
  })
  .catch(error => console.error(error));
