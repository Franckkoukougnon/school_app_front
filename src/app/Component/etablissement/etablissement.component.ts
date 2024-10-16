import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../../Service/etablissement.service';
import { response } from 'express';
import { Etablissement } from '../../Model/etablissement';

@Component({
  selector: 'app-etablissement',
  standalone: true,
  imports: [],
  templateUrl: './etablissement.component.html',
  styleUrl: './etablissement.component.css',
})
export class EtablissementComponent implements OnInit {
  // Listes des etablissement
  etablissement: Etablissement[] = [];

  ngOnInit(): void {}

  constructor(private etablissementService: EtablissementService) {}

  public getEtablissement(): void {
    this.etablissementService
      .getEtablissement()
      .subscribe((response: Etablissement[]) => {
        this.etablissement = response;
        console.log(this.etablissement);
      });
  }
}
