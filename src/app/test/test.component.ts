import {StageService} from '../_services/stage.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Offre} from '../models/offre';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {CameraService} from '../_services/camera.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../_services/service-offre.service';
import {Observable, Subject} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

import {TokenStorageService} from '../_services/token-storage.service';

import {Stage} from '../Models/Stage';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  id: number;
  t1: any;
  description: string;
  currentFileUpload: File;
  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };
  constructor( private uploadService: CameraService, private  router: Router ,
    private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService,
               private tokenStorageService: TokenStorageService)
  { }

  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = user.username;
      this.id = user.id;
    }
  }



  handleError(error) {
    console.log('Error: ', error);
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
  isSuccessful = false;
  uploadfile() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.uploaddetails(this.currentFileUpload  , this.description , this.id ).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);

      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
      this.isSuccessful = true; });

    this.selectedFiles = undefined;
  }
  // latest snapshot
display=false;
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}









