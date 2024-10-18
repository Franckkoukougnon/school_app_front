import { Eleve } from '../eleve/eleve';
import { Etablissement } from '../etablissement/etablissement';

export interface Classe {
  id: number;
  name: string;
  etablissement: Etablissement;
  eleve: Eleve[];
}
