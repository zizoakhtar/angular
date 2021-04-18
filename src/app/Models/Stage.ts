import {User} from './User';
import {proposition} from './proposition';

export class Stage {
  public id: number;
  public enseig_stage:any;
  public enseig_option:User;
  public stagiaire:User;
  public etablissement:string;
  public adresse: string;
  public status: string;
  public enc_entreprise:string;
  public mail_enc_entreprise:string;
  public dateDeb:Date;
  public datefin:Date;
  public theme:string;

  public fiche_pfe:proposition;


}
