import { Routes } from '@angular/router';
import { EtablissementByIdComponent } from './Component/etablissement-by-id/etablissement-by-id.component';
import { EtablissementComponent } from './Component/etablissement/etablissement.component';

export const routes: Routes = [
  { path: 'etablissement/:id', component: EtablissementByIdComponent },
  { path: '', component: EtablissementComponent },
];
