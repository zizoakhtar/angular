import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {Stage} from '../Models/Stage';
import {Offre} from '../Models/offre';
import {map} from 'rxjs/operators';
import {fiche} from '../Models/fiche';

const API_URL= 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class StageService {
  public host = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://cors-anywhere.herokuapp.com/http://localhost:8080/';
  private brl = 'https://cors-anywhere.herokuapp.com/http://localhost:8080/';

 addavis(theme: string, id: number, dateDeb:string, datefin:string,
         etablissement:string, adresse:string, enc_entreprise:string,  mail_enc_entreprise:string,telephone:string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
   formdata.append('theme', theme);
   formdata.append('dateDeb', dateDeb);
   formdata.append('datefin', datefin);
   formdata.append('etablissement', etablissement);
   formdata.append('adresse', adresse);
   formdata.append('enc_entreprise', enc_entreprise);
   formdata.append('mail_enc_entreprise', mail_enc_entreprise);
   formdata.append('telephone', telephone);

   const req = new HttpRequest('POST', this.host +  'ajoutConv/' + id , formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }
  motif( id: number, txt:string): Observable<HttpEvent<{}>> {

   console.log(id);
   const formdata: FormData = new FormData();
     formdata.append('txt', txt);

    const req = new HttpRequest('PUT', API_URL+ 'motif/' + id+'/'+txt,{
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

  avistraiter( id_avis, txt:string): Observable<HttpEvent<{}>> {

    console.log(id_avis);

    const req = new HttpRequest('PUT', API_URL+ 'traitrecl/'+id_avis+'/'+txt,{
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

 Fiche( id: number, titre:string,desciption:string,
          problm:string, fonct:string, f1:string,f2:string,f3:string,techno:any,t1:string,t2:string,t3:string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('titre', titre);
    formdata.append('description', desciption);
    formdata.append('problm', problm);
   formdata.append('fonct', fonct);
   formdata.append('f1', f1);
   formdata.append('f2', f2);
   formdata.append('f3', f3);


   formdata.append('techno', techno);
   formdata.append('t1', t1);
   formdata.append('t2', t2);
   formdata.append('t3', t3);

    const req = new HttpRequest('POST', this.host +  'ajoutFiche/' + id , formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }






  public save(url, data): Observable<any> {
    return this.httpClient.post<any>(url, data);
  }
  anneestat() {
    return this.httpClient.get('http://localhost:8080/statPropo' );
  }

  statutstat() {
    return this.httpClient.get('http://localhost:8080/stat' );
  }
  ajoutConv(stage: Stage,id:number): Observable<any> {
    return this.httpClient.post(API_URL + 'addConv/'+id, { responseType: 'text' });
  };
  allstage(): Observable<any> {
    return this.httpClient.get(API_URL + 'listStage/');
  }
  allFiche(): Observable<any> {
    return this.httpClient.get(API_URL + 'listFiche/');
  }

  noteFiche(id): Observable<any> {
    console.log(id);
    return this.httpClient.get(API_URL + 'getFicheByNote/'+id);
  }

  allavis():Observable<any>{
    return  this.httpClient.get(this.host+'listavis/')
}
  uploadplagiat(file: File, id: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    console.log(file);
    formdata.append('file', file);
    const req = new HttpRequest('POST', API_URL +'uploadplagiat/'+id, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }


  rec(obj:string,desc:string,file: File, id: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    console.log(file);
    formdata.append('obj', obj);
    formdata.append('desc', desc);
    formdata.append('file', file);

    const req = new HttpRequest('POST', API_URL +'rec/'+id, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }
  uploaddetails(file: File, id: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
console.log(file);
    formdata.append('file', file);
    const req = new HttpRequest('POST', API_URL +'upload/'+id, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }
  uploadfichier(name:string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    console.log(name);
    const req = new HttpRequest('POST', API_URL +'files/'+name, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }
  pfes(): Observable<any> {
    return this.httpClient.get(API_URL + 'files');
  }
  pdf(id:number): Observable<Blob> {

    return this.httpClient.get(API_URL + 'stage/export/pdf/'+id,{ responseType: 'blob' });
  }
  pdffiche(id:number): Observable<Blob> {

    return this.httpClient.get(API_URL + 'fiche/export/pdf/'+id,{ responseType: 'blob' });
  }
  public validation(id): Observable<any> {

    const req = new HttpRequest('PUT', API_URL +  'validation/' + id, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

  public updatenc(id,email): Observable<any> {
    console.log('mail',email);
    console.log('id',id);
    const req = new HttpRequest('PUT', API_URL +  'updatenc/' + id+'/'+email, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }
  public annule(id): Observable<any> {
    console.log('id',id);
    const req = new HttpRequest('PUT', API_URL +  'annule/' + id, {
      });

    return this.httpClient.request(req);
  }

  public updateStage(id,email): Observable<any> {
    console.log('mail',email);
    console.log('id',id);
    const req = new HttpRequest('PUT', API_URL +  'update/' + id+'/'+email, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

  public affectencF(id,email): Observable<any> {
    console.log('mail',email);
    console.log('id',id);
    const req = new HttpRequest('PUT', API_URL +  'updateF/' + id+'/'+email, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

  public noteEnc(id,note_esprit): Observable<any> {
    console.log('es',note_esprit);
    const req = new HttpRequest('PUT', this.host +  'notEnc/' + id+'/'+note_esprit, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }
  public noteRapp(id,note_rapporteur): Observable<any> {
    const req = new HttpRequest('PUT', this.host +  'NotRapp/' + id+'/'+note_rapporteur, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  public notejury(id,note_jury): Observable<any> {
    console.log(note_jury);
  const req = new HttpRequest('PUT', this.host +  'NotJury/' + id+'/'+note_jury, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  public getre(url): Observable<any> {
    return this.httpClient.get<any>(url);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<Stage>(this.host + 'delete/' + id);
    }
  deletefiche(id: number): Observable<any> {
    return this.httpClient.delete<fiche>(this.host + 'deletefiche/' + id);
  }
  deleteavis(id: number): Observable<any> {
    return this.httpClient.delete<Stage>(this.host + 'deleteavis/' + id);
  }
  foundtageByUserid(id): Observable<any> {

    return this.httpClient.get(this.host + 'stageId/' + id);
  }
  findStageByid(id): Observable<any> {

    return this.httpClient.get(this.host + 'getStageById/' + id);
  }

  createFiche(fiche: object, id: number): Observable<any>{
    const formdata: FormData = new FormData();
    console.log(fiche);

    const req = new HttpRequest('POST', API_URL +'ajoutFiche/'+id,fiche,);

  return this.httpClient.request(req);
}
  findStagiaireByUsername(username): Observable<any> {

    return this.httpClient.get(this.host + 'getStagiaire/' + username, { responseType: 'text' });
  }
  FindFicheID(id:number): Observable<any> {

    return this.httpClient.get(this.host + 'getFicheById/' + id, { responseType: 'text' });
  }
  FindAvisID(id:number): Observable<any> {

    return this.httpClient.get(this.host + 'getavis/' + id, { responseType: 'text' });
  }

addRecl(Description: string, id: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('description', Description);
    const req = new HttpRequest('POST', API_URL +  'addavis/' + id , formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }
  downloadFile(filename: string): Observable<Blob> {
    return this.httpClient.get(API_URL+ `files/` + filename ,
      {responseType: 'blob'});
  }
  downloadPlagiat(filename: string): Observable<Blob> {
    return this.httpClient.get(API_URL+ `plagiat/` + filename ,
      {responseType: 'blob'});
  }
}
