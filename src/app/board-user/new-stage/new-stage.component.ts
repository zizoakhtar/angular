import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StageService} from '../../_services/stage.service';
import {Stage} from '../../Models/Stage';
import {TokenStorageService} from '../../_services/token-storage.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-new-stage',
  templateUrl: './new-stage.component.html',
  styleUrls: ['./new-stage.component.css']
})
export class NewStageComponent implements OnInit {
  constructor(private US: StageService,
              private router: Router, private token: TokenStorageService) {
  }
  progress = 0;
  message = '';


  isSuccessful = false;
  stage: Stage=new Stage() ;
  submitted = false;
  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;
  q:Stage;

  @Input() events: any;

  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();

  }
  ceci() {
    this.router.navigate(['convention']);
  }
ajout:number =0;
  theme:string;
  dateDeb:string;
  datefin:string;
  etablissement:string;
  adresse:string;
  enc_entreprise:string;
  mail_enc_entreprise:string;
  telephone:string;
  ajoutcnv() {
    this.progress = 0;

    this.US.addavis( this.theme, this.id,this.dateDeb,this.datefin,this.etablissement,this.adresse,
      this.enc_entreprise,this.mail_enc_entreprise,this.telephone ).subscribe((event:any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress= Math.round(100 * event.loaded / event.total);
        this.isSuccessful = true;

      }  else if (event instanceof HttpResponse) {
        this.message = event.body.message;
      }

    });
  }
msg='';
  display=false;
  showBasicDialog() {
    this.display = true;
  }
  handleRate(event) {
    this.msg = 'You have rated ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Rating Cancelled';
  }
}
