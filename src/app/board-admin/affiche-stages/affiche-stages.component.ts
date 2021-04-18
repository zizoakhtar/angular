import { Component, OnInit } from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Stage} from '../../Models/Stage';

@Component({
  selector: 'app-affiche-stages',
  templateUrl: './affiche-stages.component.html',
  styleUrls: ['./affiche-stages.component.css']
})
export class AfficheStagesComponent implements OnInit {
  stages: any;
  private errorMessage: string;

  showFiller = false;


  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
              private  userservice:UserService,public dialog: MatDialog,private router: Router, private token: TokenStorageService) {
  }
  public t1: any;
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

    this.userservice.allusers().subscribe(data => {this.users = data; },
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
all(id:any) {
  this.us.pdf(id).subscribe(x => {
    const blob = new Blob([x], {type: 'application/pdf'});
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }
    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = data;
    link.download = 'Convention.pdf';
    link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
    setTimeout(function() {
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);

  });
}
  display = false ;
  downloadFile(fl) {

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


  onDelete(id) {
    if (confirm('Voulez-vous vraiment annuler cette convention?')) {
      this.us.annule(id).subscribe(data => {

     this.affiche();
      });

    }
  }







}
