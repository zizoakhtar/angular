import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {UploadFileService} from '../../_services/upload-file.service';
import {StageService} from '../../_services/stage.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Stage} from '../../Models/Stage';

@Component({
  selector: 'app-plagiat',
  templateUrl: './plagiat.component.html',
  styleUrls: ['./plagiat.component.css']
})
export class PlagiatComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  roles: string[];
  isLoggedIn = false;
  username: string;
  id: number;
  description: string;
  currentFileUpload: File;

  constructor( private uploadService: StageService, private  router: Router ,
               private activatedRoute: ActivatedRoute,
               private tokenStorageService: TokenStorageService) {}


a:Stage;
  fileInfos: Observable<any>;
  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.uploadService.foundtageByUserid(this.id).subscribe(e=>{
      this.a=e;
    });
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

  downloadPlagiat(fl) {

    //calling service
    this.uploadService.downloadPlagiat(fl).subscribe(x => {

      const blob = new Blob([x], {type: 'application/pdf'});
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.setAttribute('target', 'blank');
      a.href = data;
      a.download = fl;
      a.click();
      window.URL.revokeObjectURL(data);
      a.remove();

    }, error => {

      console.log(error);
    });
  }
  isSuccessful = false;
  uploadfile() {


    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.uploadplagiat(this.currentFileUpload , this.id ).subscribe((event:any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress= Math.round(100 * event.loaded / event.total);

        }  else if (event instanceof HttpResponse) {
          this.message = event.body.message;
            }
        this.uploadService.foundtageByUserid(this.id).subscribe(e=>{
          this.a=e;
        });
this.isSuccessful=true;
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  // latest snapshot
  public imagePath;
  imgURL: any;
  fileName:any;
  selectFile(event:any): void {
    this.selectedFiles = event.target.files;


    /*
    this.selectedFiles = event.target.files;

        if (event.target.files.length > 0)
        {
          const file = event.target.files[0];


          var reader = new FileReader();

        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
    */    }


}







