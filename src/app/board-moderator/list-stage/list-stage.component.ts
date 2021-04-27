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
import {Offre} from '../../Models/offre';
import {UserService} from '../../_services/user.service';


@Component({
  selector: 'app-list-stage',
  templateUrl: './list-stage.component.html',
  styleUrls: ['./list-stage.component.css']

})
export class ListStageComponent implements OnInit {
  stages: any;
  private errorMessage: string;
  showFiller = false;



  @ViewChild('dataTable') table;
  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
private  userservice:UserService,public dialog: MatDialog,private router: Router, private token: TokenStorageService) {
  }
  public t1: any;
  public  en_cours:string="en_cours";
  public  en_attente:string="en_attente";
  public currentprod: Stage;
  isSuccessful = false;
  users: any;
  userMail;

 /* selected() {
    console.log(this.currentprod.id);
    console.log(this.userMail);
  }
*/ id: number;
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


    this.userservice.getallusers().subscribe(data => {this.users = data; },
      error1 => {console.log(error1); });
this.affiche();
  }
affiche(){

  this.us.allstage().subscribe(
    data => {
      this.t1 = data;
      console.log(this.t1);
    }, error => this.errorMessage = <any> error);

}
  display1
    = false ;

  onEdit(s) {
    this.display1 = true;
    this.us.getre('http://localhost:8080/getStageById/' + s.id).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
  }

  display = false ;
  onupdateprod() {
    this.us.updateStage( this.currentprod.id, this.userMail).
    subscribe(data => {alert('mise ajour terminée'),  this.isSuccessful = true;
this.affiche();
    });

  }

ooshow(){
    this.display=true;
}


  onDelete(id): void {
    if (confirm('Voulez-vous vraiment supprimer ça?')) {
      this.us.delete(id).subscribe(data => {


      });
    }
  }







}
