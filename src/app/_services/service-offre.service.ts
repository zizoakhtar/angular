import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiceOffreService {

  public host = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }




  public Deleteprod(url) {
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    return this.httpClient.delete(url);
  }
  findpropositionByid(id): Observable<any> {

    return this.httpClient.get(this.host + 'findpropositionByid/' + id);
  }
  nameentreprisebypropo(id): Observable<any> {

    return this.httpClient.get(this.host + '  nameentreprisebypropo/' + id);
  }

  public save(url, data): Observable<any> {
    return this.httpClient.post<any>(url, data);
  }
  public getresouce(url): Observable<any> {
    return this.httpClient.get<any>(url);
  }
  public update(url, data): Observable<any> {
    return this.httpClient.put<any>(url, data);
  }

  public getre(url): Observable<any> {
    return this.httpClient.get<any>(url);
  }


  public updateuser(url, data): Observable<any> {
    return this.httpClient.put<any>(this.host + 'Updateuser/' + url, data);
  }
  public updateroleuser(url, data): Observable<any> {
    return this.httpClient.put<any>(this.host + 'Updateroleuser/' + url, data);
  }
  deleteuser(userid: number): Observable<any> {
    console.log('aa');
    console.log(userid);
    return this.httpClient.delete<any>(this.host + 'api/auth/deleteuser/' + userid);
    console.log('zz');
  }
  public updateAdmin(id, data): Observable<any> {
    return this.httpClient.put<any>(this.host + 'Updateadmin/' + id, data);
  }
  public updateproposition(id, data): Observable<any> {
    return this.httpClient.put<any>(this.host + 'Updateproposition/' + id, data);
  }

  entreprisestat() {
    return this.httpClient.get('http://localhost:8080/stat' );
  }
  offrestat() {
    return this.httpClient.get('http://localhost:8080/stat-offre' );
  }
}
