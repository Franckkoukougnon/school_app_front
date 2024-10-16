import { Classe } from './classe';

export interface Etablissement {
  id: number;
  nom: string;
  email: string;
  classe: Classe;
}
