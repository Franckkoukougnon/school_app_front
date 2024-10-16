import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtablissementComponent } from './Component/etablissement/etablissement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EtablissementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'school_app_front';
}
