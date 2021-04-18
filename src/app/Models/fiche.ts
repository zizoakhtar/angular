import {User} from './User';
import {choice} from './choice';

export class fiche {

  public id: number;
  public description: string ;
  public problm: string;
  public fonctionnality: string;
  public f1:string;
  public f2:string;
  public f3:string;
  public f4:string;

  public stagiaire: User;
  public put: Date;
  public enseig_stage: User;
  public  note_jury:any ;
  public  note_rap :any;
  public  note_univ :any;
  public techno: string;
  public t1:string;
  public t2:string;
  public t3:string;
  public titre: string;
}
