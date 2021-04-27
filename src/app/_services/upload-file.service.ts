import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'})
export class UploadFileService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  pushFileToStorage(file: File, logo: File, description: string, name_entreprise: string , categorie: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('logo', logo);
    formdata.append('file', file);
    formdata.append('description', description);
    formdata.append('name_entreprise', name_entreprise);
    formdata.append('categorie', categorie);

    const req = new HttpRequest('POST', this.baseUrl + '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl + '/getallfilepropo');
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  listpropobyoffreid(id): Observable<any> {
    return this.http.get(this.baseUrl + '/listpropbyoff/' + id);
  }
  getlistoffrebycat(url): Observable<any> {
    return this.http.get(this.baseUrl + '/findpropositionByentreprise/' + url );
  }

  getlistoffrebymate(url): Observable<any> {
    return this.http.get(this.baseUrl + '/offre/listoffrebycat?categorie=' + 'materiel');
  }

  getlistoffrebyinformatique(url): Observable<any> {
    return this.http.get(this.baseUrl + '/offre/listoffrebycat?categorie=' + 'informatique');
  }
  getlistoffrebyfourniture(url): Observable<any> {
    return this.http.get(this.baseUrl + '/offre/listoffrebycat?categorie=' + 'fourniture');
  }
  getlistoffrebyeducation(url): Observable<any> {
    return this.http.get(this.baseUrl + '/offre/listoffrebycat?categorie=' + 'education');
  }
  getlistentreprisebyeducation(url): Observable<any> {
    return this.http.get(this.baseUrl + '/listentreprisebycat?categorie=' + 'education');
  }
  getlistentreprisebyefourniture(url): Observable<any> {
    return this.http.get(this.baseUrl + '/listentreprisebycat?categorie=' + 'fourniture');
  }
  getlistentreprisebymateriel(url): Observable<any> {
    return this.http.get(this.baseUrl + '/listentreprisebycat?categorie=' + 'materiel');
  }
  getlistentreprisebyinformatique(url): Observable<any> {
    return this.http.get(this.baseUrl + '/listentreprisebycat?categorie=' + 'informatique');
  }
}
