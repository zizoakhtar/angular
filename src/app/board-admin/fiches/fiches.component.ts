import { Component, OnInit } from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Stage} from '../../Models/Stage';
import {fiche} from '../../Models/fiche';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit {
  fiches: any;
  private errorMessage: string;

  showFiller = false;


  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
              private  userservice:UserService,public dialog: MatDialog,private router: Router, private token: TokenStorageService) {
  }
  public t1: any;
  public currentprod: fiche;
  isSuccessful = false;
  users: any;
  userMail;

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
  onEdit(s) {
    this.display1 = true;
    this.us.getre('http://localhost:8080/getFicheById/' + s.id).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
  }

  onupdateprod() {
    this.us.affectencF( this.currentprod.id, this.userMail).
    subscribe(data => {alert('mise ajour terminée'),  this.isSuccessful = true;
      this.affiche();
    });
  }
rej=false;
  onReject(s)
  {
    this.rej=true;
    this.us.getre('http://localhost:8080/getFicheById/' + s.id).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });

  }
  text:string;
  ook=false;
onEnvoi(){
    this.us.motif(this.currentprod.id,this.text).subscribe(data =>
      {
        console.log(this.text);
    this.ook=true;},
      error1 => {console.log(error1); });


}


  ngOnInit() {

    this.userservice.getallusers().subscribe(data => {this.users = data; },
      error1 => {console.log(error1); });

    this.affiche();
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  display1
    = false ;
  k:any;

  downloadFile(id) {

    //calling service
    this.us.pdffiche(id).subscribe(x => {

      const blob = new Blob([x], {type: 'application/pdf'});
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.setAttribute('target', 'blank');
      a.href = data;
      a.download ='fiche-pfe.pdf' ;
      a.click();
      window.URL.revokeObjectURL(data);
      a.remove();

    }, error => {

      console.log(error);
    });
  }
  display=false;
  ooshow() {
    this.display = true;
  }
  onDelete(id): void {
    if (confirm('Voulez-vous vraiment supprimer cette fiche?')) {
      this.us.deletefiche(id).subscribe(data => {

        this.affiche();
      });

    }
  }







}
