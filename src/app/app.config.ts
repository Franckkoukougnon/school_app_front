import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { EtablissementByIdComponent } from './Component/etablissement-by-id/etablissement-by-id.component';
import { EtablissementComponent } from './Component/etablissement/etablissement.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    EtablissementByIdComponent,
    EtablissementComponent,
  ],
};
