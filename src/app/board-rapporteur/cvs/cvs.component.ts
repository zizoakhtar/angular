import {Component, OnInit, ViewChild} from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Stage} from '../../Models/Stage';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CvsComponent implements OnInit {
  stages: any;
  private errorMessage: string;



  @ViewChild('dataTable') table;
  constructor(private us: StageService,private activatedRoute: ActivatedRoute,
              private  userservice:UserService,public dialog: MatDialog,private router: Router,
              private token: TokenStorageService) {
  }
  public t1: any;
  public  en_cours:string="terminal";
  public currentprod: Stage;
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
    this.us.allstage().subscribe(
      data => {
        this.t1 = data;
        console.log(this.t1);
      }, error => this.errorMessage = <any> error);
  }
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
  display1= false ;

  onEdit(s) {
    this.display1 = true;
    this.us.getre('http://localhost:8080/getStageById/' + s.id).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
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



  onDelete(id): void {
    if (confirm('Voulez-vous vraiment supprimer cette convention?')) {
      this.us.delete(id).subscribe(data => {

        this.affiche();
      });
    }
  }







}
