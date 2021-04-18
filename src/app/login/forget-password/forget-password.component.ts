import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  forgotPasswordMessage: string;


  constructor( private router: Router,private  auth:AuthService) {
  }

  ngOnInit() {
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Tu dois entrer un valeur' :
      this.email.hasError('email') ? 'Non valide email' : '';
  }


    sendMail() {
      if (this.email.invalid) { return "veuillez verifier votre e-mail"; }
      const email = this.email.value;
      this.auth.sendmail(email).subscribe(error=>console.log(error));
      this.router.navigate(['/frgt']);
    }
  }
