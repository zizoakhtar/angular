import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Router} from '@angular/router';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

   emailNotExists: Boolean = false;
   forgetPasswordEmailSent: boolean;
   recoverEmail: string;

  constructor(private authService: AuthService, private  router: Router,
              private  userService: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
// here we are calling FrgtauthService login(credentials) method
  //credentials means your username & password.
  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        //saveToken() method is going to store the values eg: Bearer token in SessionStorage.
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  onForgetPassword() {
    this.forgetPasswordEmailSent = false;
    this.emailNotExists = false;
    this.userService.retrievePassword(this.recoverEmail).subscribe(
      res => {
        console.log(res);
        this.forgetPasswordEmailSent = true;
      },
      err => {
        let errorMessage = err['error'];
        if (errorMessage === 'Email not found.') {
          this.emailNotExists = true;
        }

      }
    );
  }

  reloadPage() {
   if (this.roles.includes('ROLE_USER')) {
     this.router.navigate(['user']);
     //window.location.reload();
   }
   if(this.roles.includes('ROLE_ADMIN')){
     this.router.navigate(['admin'])
   }
    if(this.roles.includes('ROLE_MODERATOR')){
      this.router.navigate(['mod'])
    }
    if(this.roles.includes('ROLE_RAPPORTEUR')){
      this.router.navigate(['rapp'])
    }
    if(this.roles.includes('ROLE_ENCADRANT')){
      this.router.navigate(['encadrant'])
    }
  }
}
