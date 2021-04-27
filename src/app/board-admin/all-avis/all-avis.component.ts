import { Component, OnInit } from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Stage} from '../../Models/Stage';
import {Avis} from '../../Models/avis';
import {EncrDecrService} from '../../_services/encr-decr.service';

@Component({
  selector: 'app-all-avis',
  templateUrl: './all-avis.component.html',
  styleUrls: ['./all-avis.component.css']
})
export class AllAvisComponent implements OnInit {
  private errorMessage: string;

  showFiller = false;


  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
              private  userservice:UserService,public dialog: MatDialog,private router: Router,
              private token: TokenStorageService) {
  }
  public t1: any;
  public currentprod: Avis;
  isSuccessful = false;
  id: number;
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


affiche()
{
  this.us.allavis().subscribe(
    data => {
      this.t1 = data;
      console.log(this.t1);
    }, error => this.errorMessage = <any> error);
}

  onDelete(s): void {
    if (confirm('Voulez-vous vraiment supprimer cette reclamation ?')) {
      this.us.deleteavis(s.id_avis).subscribe(data => {
this.affiche();

      });

    }
  }
text:string;
  ook=false;



  traiter=false;
  onEdit(s) {
    this.traiter = true;
    this.us.getre('http://localhost:8080/getavis/' + s.id_avis).subscribe(data => {
        this.currentprod = data;
      },
      error1 => {
        console.log(error1);
      });
  }

    onupdateprod() {
    this.us.avistraiter( this.currentprod.id_avis, this.text).
    subscribe(data =>
      {
        console.log(this.currentprod.id_avis);

        console.log(this.text);
        this.ook=true;},
      error1 => {console.log(error1); });


  }


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





}
