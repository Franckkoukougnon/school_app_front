import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../../Service/etablissement.service';
import { response } from 'express';
import { Etablissement } from '../../Model/etablissement';
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
  // Listes des etablissement
  etablissements: Etablissement[] = [];

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
        this.etablissements = data; // Stocker les données récupérées
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
