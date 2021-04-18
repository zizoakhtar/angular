
import {Component, OnInit, ViewChild} from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Stage} from '../../Models/Stage';

@Component({
  selector: 'app-all-stage',
  templateUrl: './all-stage.component.html',
  styleUrls: ['./all-stage.component.css']

})
export class AllStageComponent implements OnInit {
  stages: any;
  private errorMessage: string;
  showFiller = false;



  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
              private  userservice:UserService,public dialog: MatDialog,private router: Router, private token: TokenStorageService) {
  }
  public t1: any;
  public  terminal:string="terminal";
  public currentprod: Stage;
  isSuccessful = false;
  users: any;
  userMail;

  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;
affiche(){


  this.us.allstage().subscribe(
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

    this.userservice.getallusers().subscribe(data => {this.users = data; },
      error1 => {console.log(error1); });
this.affiche();
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
    this.us.updatenc( this.currentprod.id, this.userMail).
    subscribe(data => {alert('mise ajour terminée'),  this.isSuccessful = true;
      this.affiche();
    });

  }

  ooshow(){
    this.display=true;
  }


  onDelete(id): void {
    if (confirm('Voulez-vous vraiment supprimer ce stage?')) {
      this.us.delete(id).subscribe(data => {


      });
    }
  }







}
