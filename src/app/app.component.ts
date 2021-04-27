import {Component, HostListener, OnInit} from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
showUserBoard=false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showEncadrantBoard = false;
  username: string;
showRappBoard=false;
  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
this.showUserBoard=this.roles.includes('ROLE_USER');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showRappBoard=this.roles.includes('ROLE_RAPPORTEUR');
      this.showEncadrantBoard=this.roles.includes('ROLE_ENCADRANT');
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.log('Scroll Event');
  }
}
