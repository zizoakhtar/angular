import {Component, OnInit, ViewChild} from '@angular/core';
import {Stage} from '../../Models/Stage';
import {Observable} from 'rxjs';
import {StageService} from '../../_services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import {UserService} from '../../_services/user.service';
import {fiche} from '../../Models/fiche';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styles: [`
  :host ::ng-deep .ui-button {
      margin: .5em .5em .5em 0;
      width: 140px;
  }
  @media screen and (max-width: 40em) {
      :host ::ng-deep .ui-dialog {
          width: 75vw !important;
      }
  }
`]
})

export class NotesComponent implements OnInit {
  stages: any;
  private errorMessage: string;



  @ViewChild('dataTable') table;
  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
              private  userservice:UserService,public dialog: MatDialog,private router: Router,
              private token: TokenStorageService) {
  }
  public t1: any;
  public  en_cours:string="terminal";
  public currentprod: fiche;
  isSuccessful = false;
  users: any;
  userMail;
  /*
  public note_jury ;

  public  note_entrep;
  public  note_univ ;
*/
  /* selected() {
     console.log(this.currentprod.id);
     console.log(this.userMail);
   }
 */
  affiche(){
    this.us.allFiche().subscribe(
      data => {
        this.t1 = data;
        console.log(this.t1);
      }, error => this.errorMessage = <any> error);
  }id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;


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
  display1= false ;

  onEdit(s) {
    this.display1 = true;
    this.us.getre('http://localhost:8080/getStageById/' + s.id).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
  }

  display = false ;
  onupdateprod() {
    this.us.noteRapp( this.currentprod.id, this.currentprod.note_rap).
    subscribe(data => {alert('mise ajour termineée'),  this.isSuccessful = true;
this.affiche();
    });

  }downloadFile(fl) {

    //calling service
    this.us.downloadFile(fl).subscribe(x => {

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
      a.download = fl;
      a.click();
      window.URL.revokeObjectURL(data);
      a.remove();

    }, error => {

      console.log(error);
    });
  }
  ooshow(){
    this.display=true;
  }
  downloadPlagiat(fl) {

    //calling service
    this.us.downloadPlagiat(fl).subscribe(x => {

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
      a.download = fl;
      a.click();
      window.URL.revokeObjectURL(data);
      a.remove();

    }, error => {

      console.log(error);
    });
  }



  onDelete(id): void {
    if (confirm('Voulez-vous vraiment supprimer cette convention?')) {
      this.us.delete(id).subscribe(data => {

this.affiche();
      });
    }
  }







}
