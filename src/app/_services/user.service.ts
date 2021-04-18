import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';
const old = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  retrievePassword(recoverEmail: string): Observable<any> {
    const url = 'http://localhost:8080/api/auth/forgetPassword';

    return this.http.post(url, recoverEmail, { responseType: 'text'});
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getEncBoard(): Observable<any> {
    return this.http.get(API_URL + 'encadrant', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getRappBoard(): Observable<any> {
    return this.http.get(API_URL + 'rapp', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getallusers(): Observable<any> {
    return this.http.get(old + '/listuser');
  }

  allusers(): Observable<any> {
    return this.http.get(old + '/allusers',{responseType:'text'});
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
