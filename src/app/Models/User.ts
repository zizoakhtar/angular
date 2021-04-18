import {UserRole} from './UserRole';
import {Stage} from './Stage';
import {proposition} from './proposition';
import {Plagiat} from './Plagiat';


export class User {
  username: string;
  token?: string;
  role?: UserRole;
  email:string;
  telephone:string;
  stage:Stage;
  propo:proposition;
  plagiat:Plagiat;
  valider:string;
}
