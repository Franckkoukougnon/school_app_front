import { Routes } from '@angular/router';

import { EtablissementComponent } from './Component/etablissement/etablissement.component';
import { EtablissementDetailComponent } from './Component/etablissement-detail/etablissement-detail.component';

export const routes: Routes = [
  { path: 'etablissement/:id', component: EtablissementDetailComponent },
  { path: '', component: EtablissementComponent },
];
