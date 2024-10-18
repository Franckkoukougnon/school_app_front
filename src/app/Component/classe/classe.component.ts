import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../../Service/classe/classe.service';
import { Classe } from '../../Model/classes/classe';

@Component({
  selector: 'app-classe',
  standalone: true,
  imports: [],
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css',
})
export class ClasseComponent implements OnInit {
  classe: Classe[] = [];
  constructor(private classeService: ClasseService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getClasse(): void {
    this.classeService.getClasse().subscribe(
      (data) => {
        this.classe = data; // Stocker les données récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des classes', error);
      }
    );
  }
}
