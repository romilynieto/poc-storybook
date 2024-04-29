import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyDZ1QsRj3sFZpoJQJ64ZNVlOSQ_yovNDOU',
  authDomain: 'project-2568238377859063512.firebaseapp.com	',
  databaseURL: "https://project-2568238377859063512.firebaseio.com",
  projectId: 'project-2568238377859063512',
  storageBucket: "project-2568238377859063512.appspot.com",
  messagingSenderId: '986676791028',
  appId: "1:986676791028:web:7a905403ab9c99526440a1"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ]),
  ],
};