import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../../Service/etablissement/etablissement.service';
import { response } from 'express';
import { Etablissement } from '../../Model/etablissement/etablissement';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-etablissement',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css'],
})
export class EtablissementComponent implements OnInit {
  etablissements: Etablissement[] = [];
  selectedEtablissement?: Etablissement; // Propriété pour le choix d'un établissement

  constructor(
    private route: ActivatedRoute,
    private etablissementService: EtablissementService
  ) {}

  ngOnInit(): void {
    this.getEtablissements(); // Récupérer les données au démarrage
  }

  // Méthode pour récupérer la liste des établissements
  getEtablissements(): void {
    this.etablissementService.getEtablissement().subscribe(
      (data) => {
        this.etablissements = data;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des établissements',
          error
        );
      }
    );
  }
}
