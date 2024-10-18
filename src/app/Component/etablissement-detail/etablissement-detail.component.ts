import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../../Model/etablissement/etablissement';
import { ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../../Service/etablissement/etablissement.service';
import { CommonModule } from '@angular/common';
import { ClasseService } from '../../Service/classe/classe.service';
import { Classe } from '../../Model/classes/classe';

@Component({
  selector: 'app-etablissement-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etablissement-detail.component.html',
  styleUrl: './etablissement-detail.component.css',
})
export class EtablissementDetailComponent implements OnInit {
  showEleves(_t15: Classe) {
    throw new Error('Method not implemented.');
  }
  etablissement: Etablissement | undefined;
  classes: Classe[] = [];

  constructor(
    private route: ActivatedRoute,
    private etablissementService: EtablissementService,
    private classeService: ClasseService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.etablissementService.getEtablissementById(id).subscribe(
        (data) => {
          this.etablissement = data;
          console.log(this.etablissement);
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
