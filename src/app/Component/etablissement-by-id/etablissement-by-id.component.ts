import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../../Service/etablissement.service';
import { Etablissement } from '../../Model/etablissement';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etablissement-by-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etablissement-by-id.component.html',
  styleUrls: ['./etablissement-by-id.component.css'],
})
export class EtablissementByIdComponent implements OnInit {
  etablissement!: Etablissement;

  constructor(
    private route: ActivatedRoute,
    private etablissementService: EtablissementService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.getEtablissementById(id);
      }
    });
  }

  getEtablissementById(id: string): void {
    this.etablissementService.getEtablissementById(id).subscribe(
      (data) => {
        this.etablissement = data;
      },
      (error) => {
        console.error(
          "Erreur lors de la récupération de l'établissement :",
          error
        );
      }
    );
  }
}
