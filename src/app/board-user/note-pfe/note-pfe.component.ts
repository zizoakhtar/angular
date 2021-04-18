import { Component, OnInit } from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {Stage} from '../../Models/Stage';
import {TokenStorageService} from '../../_services/token-storage.service';
import {fiche} from '../../Models/fiche';

@Component({
  selector: 'app-note-pfe',
  templateUrl: './note-pfe.component.html',
  styleUrls: ['./note-pfe.component.css']
})
export class NotePFEComponent implements OnInit {

  constructor(private  us: StageService, private token: TokenStorageService) {
  }

  t1: any;
  errorMessage: string;
  notes: fiche;
  id: number;


  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;

isSuccesful=false;

  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }

this.affiche();
  }
  affiche(){
    this.us.noteFiche(this.id).subscribe(
      data => {
        this.t1 = data;
        console.log(this.t1);
        this.isSuccesful=true;
      },
        error => this.errorMessage = <any> error);
  }
  }
