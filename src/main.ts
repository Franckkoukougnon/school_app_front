import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config'; // Assurez-vous que ce fichier existe et est correctement configuré.

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Active fetch pour HttpClient
    ...(appConfig.providers || []), // Ajoute les autres providers si disponibles
  ],
}).catch((err) => console.error(err));
