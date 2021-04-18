import {Component, Input, OnInit} from '@angular/core';
import {fiche} from '../../Models/fiche';
import {StageService} from '../../_services/stage.service';
import {Stage} from '../../Models/Stage';
import {TokenStorageService} from '../../_services/token-storage.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {Router} from 'express';
@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {



  constructor(private AS: StageService, private token:TokenStorageService ,private http:HttpClient
          ) {
  }
  isSuccessful = false;
  stage: Stage=new Stage() ;
  submitted = false;
  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;

  progress = 0;
  message = '';
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

  titre:string;
  description:string;
  problm:string;
  fonct:string;
  techno:string;
  t1:string;
  t2:string;
  t3:string;
  f1:string;
  f2:string;
  f3:string;

  mail_enc_entreprise:string;
  telephone:string;
  ajoutfiche() {
    this.progress=0;
    this.AS.Fiche(  this.id,this.titre,this.description,this.problm,this.fonct,this.f1,this.f2,this.f3,
      this.techno,this.t1,this.t2,this.t3).subscribe((event:any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress= Math.round(100 * event.loaded / event.total);
        this.isSuccessful = true;

      }  else if (event instanceof HttpResponse) {
        this.message = event.body.message;
      }

    });
  }
  ajoutt=false;
  ajout(){
    this.ajoutt=true;
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
