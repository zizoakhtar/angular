import { Component, OnInit } from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Stage} from '../../Models/Stage';
import {fiche} from '../../Models/fiche';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  stages: any;
  private errorMessage: string;
  showFiller = false;



  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
              private  userservice:UserService,public dialog: MatDialog,private router: Router, private token: TokenStorageService) {
  }
  public t1: any;
  public  en_cours:string="terminal";
  public currentprod: fiche;
display1=false;
  isSuccessful = false;
onGet(s)
{ this.display1 = true;
  this.us.getre('http://localhost:8080/getFicheById/' + s.id).subscribe(data => {this.currentprod = data; },
    error1 => {console.log(error1); });
}

  onupdateprod() {
    this.us.notejury(this.currentprod.id, this.currentprod.note_jury).subscribe(data => {
      alert('mise ajour terminée'), this.isSuccessful = true;
      this.affiche();
    });
  }






  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;

affiche(){
  this.us.allFiche().subscribe(
    data => {
      this.t1 = data;
      console.log(this.t1);
    }, error => this.errorMessage = <any> error);

}
  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();
this.affiche();
  }
  display
    = false ;
ooshow()
{this.display=true;}
  onEdit(s) {
    if (confirm('Voulez-vous vraiment valider ce stage ?')) {
      this.us.validation(s).subscribe(data => {
this.affiche();
        },
        error1 => {
          console.log(error1);
        });
    }
  }

}
