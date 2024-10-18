import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../../Model/etablissement/etablissement';
import { ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../../Service/etablissement/etablissement.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etablissement-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etablissement-detail.component.html',
  styleUrl: './etablissement-detail.component.css',
})
export class EtablissementDetailComponent implements OnInit {
  etablissement: Etablissement | undefined;

  constructor(
    private route: ActivatedRoute,
    private etablissementService: EtablissementService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.etablissementService.getEtablissementById(id).subscribe(
        (data) => {
          this.etablissement = data;
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération de l'établissement",
            error
          );
        }
      );
    }
  }
}
